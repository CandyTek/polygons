import React from 'react';
import PropTypes from 'prop-types';
import { genTestArc } from './testArc';

export default function GraphStepAngleRight(props) {
    const { current, stepIndex, centre, radius, start, direction, lineProps } = props;

    const [centreX, centreY] = centre;

    const pointRight = [
        centreX + radius * Math.cos(direction * Math.PI / 3),
        centreY - radius * Math.sin(direction * Math.PI / 3)
    ];

    const pointLeft = [
        centreX + radius * Math.cos(direction * 2 * Math.PI / 3),
        centreY - radius * Math.sin(direction * 2 * Math.PI / 3)
    ];

    let testArcs = [
        genTestArc(centreX, centreY, radius, start),
        genTestArc(centreX, centreY, radius, start - direction * Math.PI / 3),
        genTestArc(centreX + radius, centreY, radius, start - direction * 2 * Math.PI / 3),
        genTestArc(...pointRight, radius, Math.PI),
        genTestArc(centreX, centreY, radius, start - direction * 2 * Math.PI / 3),
        genTestArc(...pointLeft, radius, -direction * Math.PI / 3),
        genTestArc(...pointRight, radius, -direction * 2 * Math.PI / 3)
    ];

    if (current) {
        testArcs = testArcs.slice(0, stepIndex + 1);
    }

    const paths = testArcs.map((arc, key) => <path key={key} d={arc} {...lineProps} />);

    return (
        <g>
            {paths}
        </g>
    );
}

GraphStepAngleRight.propTypes = {
    centre: PropTypes.array.isRequired,
    radius: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    direction: PropTypes.number.isRequired,
    lineProps: PropTypes.object.isRequired,
    current: PropTypes.bool.isRequired,
    stepIndex: PropTypes.number.isRequired
};

