export function genTestArc(centreX, centreY, radius, start, testArcSweep = 0.3) {
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

