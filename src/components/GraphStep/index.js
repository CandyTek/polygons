import React from 'react';
import PropTypes from 'prop-types';
import {
    TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT
} from '../../constants/graph';
import GraphStepLine from './line';
import GraphStepPoint from './point';
import GraphStepCircle from './circle';
import GraphStepAngleRight from './angleRight';

export default function GraphStep({ current, stepIndex, type, ...step }) {
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

    if (type === TYPE_ANGLE_RIGHT) {
        return (
            <GraphStepAngleRight
                current={current}
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
    current: PropTypes.bool.isRequired,
    stepIndex: PropTypes.number.isRequired
};

