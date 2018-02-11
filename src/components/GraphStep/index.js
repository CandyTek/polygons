import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_LINE, TYPE_ANGLE_RIGHT } from '../../constants/polygons';
import GraphStepLine from './line';
import GraphStepAngleRight from './angleRight';

export default function GraphStep({ type, ...step }) {
    const lineProps = {
        stroke: 'black',
        strokeWidth: 1
    };

    const linePropsSketch = {
        stroke: '#666',
        fill: 'none',
        strokeWidth: 1
    };

    if (type === TYPE_LINE) {
        return <GraphStepLine {...step} lineProps={lineProps} />;
    }

    if (type === TYPE_ANGLE_RIGHT) {
        return <GraphStepAngleRight {...step} lineProps={linePropsSketch} />;
    }

    return null;
}

GraphStep.propTypes = {
    type: PropTypes.string.isRequired
};

