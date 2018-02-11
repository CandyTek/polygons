import React from 'react';
import PropTypes from 'prop-types';

export function genTestArc(centreX, centreY, radius, start, testArcSweep = 0.15) {
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

export default function GraphStepTestArc({ centre, radius, start, lineProps }) {
    const testArc = genTestArc(...centre, radius, -start);

    return (
        <g>
            <path d={testArc} {...lineProps} />
        </g>
    );
}

GraphStepTestArc.propTypes = {
    centre: PropTypes.array.isRequired,
    radius: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    lineProps: PropTypes.object.isRequired
};

