import React from 'react';
import PropTypes from 'prop-types';
import { genTestArc } from './testArc';
import GraphStepLine from './line';

export default function GraphStepAngleRight(props) {
    const { current, stepIndex, centre, radius, start, direction, lineProps } = props;

    const [centreX, centreY] = centre;

    const angle1 = -start - direction * Math.PI / 3;
    const angle2 = angle1 - direction * Math.PI / 3;

    const pointStart = [
        centreX + radius * Math.cos(-start),
        centreY + radius * Math.sin(-start)
    ];

    const pointRight = [
        centreX + radius * Math.cos(angle1),
        centreY + radius * Math.sin(angle1)
    ];

    const pointLeft = [
        centreX + radius * Math.cos(angle2),
        centreY + radius * Math.sin(angle2)
    ];

    const pointEnd = [
        pointLeft[0] + radius * Math.cos(-start - direction * Math.PI / 3),
        pointLeft[1] + radius * Math.sin(-start - direction * Math.PI / 3)
    ];

    const testArcs = [
        genTestArc(...centre, radius, -start),
        genTestArc(...centre, radius, angle1),
        genTestArc(...pointStart, radius, angle2),
        genTestArc(...pointRight, radius, direction * Math.PI - start),
        genTestArc(...centre, radius, angle2),
        genTestArc(...pointLeft, radius, -start - direction * Math.PI / 3),
        genTestArc(...pointRight, radius, direction * Math.PI * 4 / 3 - start)
    ];

    const arcPaths = testArcs.map((arc, key) => <path key={key} d={arc} {...lineProps} />);

    const line1 = <GraphStepLine key="linestart" from={centre} to={pointStart} lineProps={lineProps} />;

    const line2 = <GraphStepLine key="angleline" from={pointEnd} to={centre} lineProps={lineProps} />;

    const paths = [line1, ...arcPaths, line2];

    const pathsVisible = current
        ? paths.slice(0, stepIndex)
        : paths;

    return (
        <g>
            {pathsVisible}
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

