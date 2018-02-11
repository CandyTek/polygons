import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_LINE } from '../../constants/polygons';
import GraphStepLine from './line';

export default function GraphStep({ type, ...step }) {
    const lineProps = {
        stroke: 'black',
        lineWidth: 1
    };

    if (type === TYPE_LINE) {
        return <GraphStepLine {...step} lineProps={lineProps} />;
    }

    return null;
}

GraphStep.propTypes = {
    type: PropTypes.string.isRequired
};

