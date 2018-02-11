import React from 'react';
import PropTypes from 'prop-types';
import {
    TYPE_LINE, TYPE_POINT, TYPE_TEST_ARC, TYPE_CIRCLE, TYPE_ANGLE_RIGHT, TYPE_DIVIDE_LINE, TYPE_BISECT
} from '../../constants/graph';
import GraphStepLine from './line';
import GraphStepPoint from './point';
import GraphStepTestArc from './testArc';
import GraphStepCircle from './circle';
import GraphStepAngleRight from './angleRight';
import GraphStepDivideLine from './divideLine';
import GraphStepBisect from './bisect';

export default function GraphStep({ currentStep, currentSubStep, stepIndex, type, sketch, final, ...step }) {
    if (sketch && !currentStep) {
        return null;
    }

    const linePropsNormal = {
        stroke: '#666',
        fill: 'none',
        strokeWidth: 1
    };

    const linePropsSketch = {
        stroke: '#999',
        fill: 'none',
        strokeWidth: 1
    };

    const linePropsFinal = {
        stroke: '#000',
        fill: 'none',
        strokeWidth: 2
    };

    let lineProps = linePropsNormal;
    if (sketch) {
        lineProps = linePropsSketch;
    }
    else if (final) {
        lineProps = linePropsFinal;
    }

    if (type === TYPE_LINE) {
        return <GraphStepLine {...step} lineProps={lineProps} />;
    }

    if (type === TYPE_POINT) {
        return <GraphStepPoint {...step} />;
    }

    if (type === TYPE_TEST_ARC) {
        return <GraphStepTestArc {...step} lineProps={lineProps} />;
    }

    if (type === TYPE_CIRCLE) {
        return <GraphStepCircle {...step} lineProps={lineProps} />;
    }

    if (type === TYPE_ANGLE_RIGHT) {
        return (
            <GraphStepAngleRight
                current={currentSubStep}
                stepIndex={stepIndex}
                lineProps={lineProps}
                {...step}
            />
        );
    }

    if (type === TYPE_DIVIDE_LINE) {
        return (
            <GraphStepDivideLine
                current={currentSubStep}
                stepIndex={stepIndex}
                lineProps={lineProps}
                {...step}
            />
        );
    }

    if (type === TYPE_BISECT) {
        return (
            <GraphStepBisect
                current={currentSubStep}
                stepIndex={stepIndex}
                lineProps={lineProps}
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
    stepIndex: PropTypes.number,
    sketch: PropTypes.bool,
    final: PropTypes.bool
};

