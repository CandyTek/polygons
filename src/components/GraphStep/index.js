import React from 'react';
import PropTypes from 'prop-types';
import {
    TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT, TYPE_DIVIDE_LINE, TYPE_BISECT
} from '../../constants/graph';
import GraphStepLine from './line';
import GraphStepPoint from './point';
import GraphStepCircle from './circle';
import GraphStepAngleRight from './angleRight';
import GraphStepDivideLine from './divideLine';
import GraphStepBisect from './bisect';

export default function GraphStep({ currentStep, currentSubStep, stepIndex, type, ...step }) {
    const lineProps = {
        stroke: '#666',
        fill: 'none',
        strokeWidth: 1
    };

    const linePropsSketch = {
        stroke: '#999',
        fill: 'none',
        strokeWidth: 1
    };

    if (type === TYPE_LINE) {
        return <GraphStepLine {...step} lineProps={lineProps} />;
    }

    if (type === TYPE_POINT) {
        return <GraphStepPoint {...step} />;
    }

    if (type === TYPE_CIRCLE) {
        return <GraphStepCircle {...step} lineProps={lineProps} />;
    }

    if (!currentStep) {
        return null;
    }

    if (type === TYPE_ANGLE_RIGHT) {
        return (
            <GraphStepAngleRight
                current={currentSubStep}
                stepIndex={stepIndex}
                lineProps={linePropsSketch}
                {...step}
            />
        );
    }

    if (type === TYPE_DIVIDE_LINE) {
        return (
            <GraphStepDivideLine
                current={currentSubStep}
                stepIndex={stepIndex}
                lineProps={linePropsSketch}
                {...step}
            />
        );
    }

    if (type === TYPE_BISECT) {
        return (
            <GraphStepBisect
                current={currentSubStep}
                stepIndex={stepIndex}
                lineProps={linePropsSketch}
                {...step}
            />
        );
    }

    return null;
}

GraphStep.propTypes = {
    type: PropTypes.string.isRequired,
    currentStep: PropTypes.bool.isRequired,
    currentSubStep: PropTypes.bool.isRequired,
    stepIndex: PropTypes.number
};

