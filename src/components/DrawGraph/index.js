import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GraphStep from '../GraphStep';
import { GRAPH_WIDTH, GRAPH_HEIGHT, ANIM_STEPS } from '../../constants/graph';

const ANIMATION_SPEED = 200;

const getNumStepsForType = type => ANIM_STEPS[type] || 1;

function getNumAnimSteps(props) {
    const { polygon, step } = props;

    return polygon.steps[step].subSteps.reduce((numSteps, { type }) =>
        numSteps + getNumStepsForType(type), 0
    );
}

function getCurrentStepIndex(props, animStep) {
    const { polygon, step } = props;

    const {
        subStep: currentSubStep,
        animIndex: subStepIndex
    } = polygon.steps[step]
        .subSteps
        .reduce(({ subStep, animIndex, numAnimSteps }, { type }, thisSubStep) => {

            if (numAnimSteps > animStep) {
                return { subStep, animIndex, numAnimSteps };
            }

            const numAnimStepsForSubStep = getNumStepsForType(type);

            if (numAnimSteps + numAnimStepsForSubStep > animStep) {
                return {
                    subStep: thisSubStep,
                    animIndex: animStep - numAnimSteps,
                    numAnimSteps: numAnimSteps + numAnimStepsForSubStep
                };
            }

            return {
                subStep,
                animIndex,
                numAnimSteps: numAnimSteps + numAnimStepsForSubStep
            };

        }, {
            subStep: -1,
            animIndex: 0,
            numAnimSteps: 0
        });

    const currentStepId = polygon.steps[step].subSteps[currentSubStep].id;

    return { currentSubStep, currentStepId, subStepIndex };
}

export default class DrawGraph extends Component {
    constructor(props) {
        super(props);

        this.timer = null;

        this.state = {
            playing: true,
            animStep: -1,
            numAnimSteps: getNumAnimSteps(props),
            currentSubStep: -1,
            currentStepId: null,
            subStepIndex: 0
        };
    }
    animate(startAgain = false) {
        if (startAgain) {
            clearTimeout(this.timer);

            this.setState({
                playing: true,
                animStep: -1,
                ...getCurrentStepIndex(this.props, 0)
            });
        }
        else if (this.state.animStep < this.state.numAnimSteps - 1) {
            this.setState({
                playing: true,
                animStep: this.state.animStep + 1,
                ...getCurrentStepIndex(this.props, this.state.animStep + 1)
            });
        }
        else {
            this.setState({
                playing: false
            });
        }
    }
    componentDidMount() {
        this.timer = setTimeout(() => this.animate(), ANIMATION_SPEED);
    }
    shouldComponentUpdate(nextProps) {
        if (!(nextProps.polygon.name === this.props.polygon.name &&
            nextProps.step === this.props.step)) {

            this.setState({
                playing: true,
                animStep: -1,
                numAnimSteps: getNumAnimSteps(nextProps),
                currentSubStep: -1,
                currentStepId: null,
                subStepIndex: 0
            });

            return false;
        }

        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.playing && prevState.animStep !== this.state.animStep) {
            clearTimeout(this.timer);

            this.timer = setTimeout(() => this.animate(), ANIMATION_SPEED);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        const { polygon, step } = this.props;

        const renderedSteps = polygon.steps
            .slice(0, step)
            .reduce((steps, { subSteps }) => ([...steps, ...subSteps]), [])
            .concat(polygon.steps[step].subSteps
                .slice(0, this.state.currentSubStep + 1)
            )
            .map(({ id, ...item }) => (
                <GraphStep
                    key={id}
                    current={this.state.currentStepId === id}
                    stepIndex={this.state.subStepIndex}
                    {...item}
                />
            ));

        const onStartAnimation = () => this.animate(true);

        return (
            <div className="graph">
                <button onClick={onStartAnimation}>{'Play'}</button>
                <svg width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
                    {renderedSteps}
                </svg>
            </div>
        );
    }
}

DrawGraph.propTypes = {
    polygon: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired
};

