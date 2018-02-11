import React from 'react';
import PropTypes from 'prop-types';

function genTestArc(centreX, centreY, radius, start, testArcSweep = 0.3) {
    const startX = centreX + radius * Math.cos(start - testArcSweep);
    const startY = centreY + radius * Math.sin(start - testArcSweep);

    const finalX = centreX + radius * Math.cos(start + testArcSweep);
    const finalY = centreY + radius * Math.sin(start + testArcSweep);

    const pathDef = [
        'M',
        startX,
        startY,
        'A',
        radius,
        radius,
        start,
        0,
        1,
        finalX,
        finalY
    ];

    return pathDef.join(' ');
}

export default function GraphStepAngleRight({ centre, radius, start, direction, lineProps }) {
    const [centreX, centreY] = centre;

    const pointRight = [
        centreX + radius * Math.cos(direction * Math.PI / 3),
        centreY - radius * Math.sin(direction * Math.PI / 3)
    ];

    const pointLeft = [
        centreX + radius * Math.cos(direction * 2 * Math.PI / 3),
        centreY - radius * Math.sin(direction * 2 * Math.PI / 3)
    ];

    const testArcs = [
        genTestArc(centreX, centreY, radius, start),
        genTestArc(centreX, centreY, radius, start - direction * Math.PI / 3),
        genTestArc(centreX + radius, centreY, radius, start - direction * 2 * Math.PI / 3),
        genTestArc(...pointRight, radius, Math.PI),
        genTestArc(centreX, centreY, radius, start - direction * 2 * Math.PI / 3),
        genTestArc(...pointLeft, radius, -direction * Math.PI / 3),
        genTestArc(...pointRight, radius, -direction * 2 * Math.PI / 3)
    ]
        .map((arc, key) => <path key={key} d={arc} {...lineProps} />);

    return (
        <g>
            {testArcs}
        </g>
    );
}

GraphStepAngleRight.propTypes = {
    centre: PropTypes.array.isRequired,
    radius: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    direction: PropTypes.number.isRequired,
    lineProps: PropTypes.object.isRequired
};

