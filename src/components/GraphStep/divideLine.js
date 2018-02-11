import React from 'react';
import PropTypes from 'prop-types';
import { genTestArc } from './testArc';

export default function GraphStepDivideLine({ current, stepIndex, from, to, lineProps }) {
    const [fromX, fromY] = from;
    const [toX, toY] = to;

    const distance = Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);

    const angle = Math.atan2(toY - fromY, toX - fromX);

    const testRadius = distance * 0.6;

    const testAngleRightTop = angle + 0.58;
    const testAngleRightBottom = angle + 0.6;
    const testAngleLeftTop = angle - 0.58;
    const testAngleLeftBottom = angle - 0.6;

    const testArcs = [
        genTestArc(...from, testRadius, testAngleRightBottom, 0.15),
        genTestArc(...from, testRadius, testAngleLeftBottom, 0.15),
        genTestArc(...to, testRadius, -testAngleLeftTop, 0.15),
        genTestArc(...to, testRadius, -testAngleRightTop, 0.15)
    ];

    const paths = testArcs.map((arc, key) => <path key={key} d={arc} {...lineProps} />);

    const coords = {
        x1: fromX + testRadius * Math.cos(testAngleRightBottom),
        y1: fromY + testRadius * Math.sin(testAngleRightBottom),
        x2: fromX + testRadius * Math.cos(testAngleLeftBottom),
        y2: fromY + testRadius * Math.sin(testAngleLeftBottom)
    };

    const line = <line key="line" {...coords} {...lineProps} />;

    paths.push(line);

    const pathsVisible = current
        ? paths.slice(0, stepIndex)
        : paths;

    return (
        <g>
            {pathsVisible}
        </g>
    );
}

GraphStepDivideLine.propTypes = {
    from: PropTypes.array.isRequired,
    to: PropTypes.array.isRequired,
    lineProps: PropTypes.object.isRequired,
    current: PropTypes.bool.isRequired,
    stepIndex: PropTypes.number.isRequired
};

