import React from 'react';
import PropTypes from 'prop-types';

export default function GraphStepPoint({ name, at }) {
    let pathName = null;
    if (name) {
        const coords = { 'x': at[0] - 1, 'y': at[1] + 3 };

        const textProps = {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 12,
            alignmentBaseline: 'hanging',
            textAnchor: 'end',
            color: '#666'
        };

        pathName = (
            <text {...coords} {...textProps}>{name}</text>
        );
    }

    const circleProps = {
        fill: '#666',
        stroke: 'none'
    };

    const circleCoords = { cx: at[0], cy: at[1], 'r': 2 };

    return (
        <g>
            <circle {...circleCoords} {...circleProps} />
            {pathName}
        </g>
    );
}

GraphStepPoint.propTypes = {
    name: PropTypes.string,
    at: PropTypes.array.isRequired
};

