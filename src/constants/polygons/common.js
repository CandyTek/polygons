import { TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT, TYPE_TEST_ARC } from '../graph';

export const stepXAxisAndCircle = {
    name: 'X Axis and Circle',
    subSteps: [
        {
            id: 'x-axis',
            type: TYPE_LINE,
            from: [-1000, 0],
            to: [1000, 0]
        },
        {
            id: 'origin',
            type: TYPE_POINT,
            name: 'O',
            at: [0, 0]
        },
        {
            id: 'circle',
            type: TYPE_CIRCLE,
            centre: [0, 0],
            radius: 900
        }
    ]
};

export const stepYAxis = {
    name: 'Y Axis',
    subSteps: [
        {
            id: 'x-to-y-axis',
            type: TYPE_ANGLE_RIGHT,
            sketch: true,
            centre: [0, 0],
            radius: 150,
            start: 0,
            direction: 1
        },
        {
            id: 'y-axis',
            type: TYPE_LINE,
            from: [0, 1000],
            to: [0, -1000]
        },
        {
            id: 'point-A',
            type: TYPE_POINT,
            name: 'A',
            at: [0, 900]
        }
    ]
};

const getAngleToNextVertex = (totalSides, index) =>
    Math.PI * (0.5 + 1 / totalSides * (2 * index + 1));

export const genStepVertices = (totalSides, from, numSides, vertices, sideLength) =>
    new Array(numSides * 2).fill(0)
        .reduce((items, item, index) => ([
            ...items,
            {
                id: `_autogen_${totalSides}-gon-arc-v${index + 1 + from}`,
                type: TYPE_TEST_ARC,
                sketch: true,
                centre: vertices[(index + from) % totalSides],
                radius: sideLength,
                start: getAngleToNextVertex(totalSides, from + index)
            },
            {
                id: `_autogen_${totalSides}-gon-line-v${index + 1 + from}`,
                type: TYPE_LINE,
                final: true,
                from: vertices[(index + from) % totalSides],
                to: vertices[(index + 1 + from) % totalSides]
            }
        ]), []);

export const genPolygonParams = (numSides, radius = 900) => ({
    vertices: new Array(numSides).fill(0)
        .map((item, index) => ([
            radius * Math.cos(index * 2 * Math.PI / numSides),
            radius * Math.sin(index * 2 * Math.PI / numSides)
        ])),
    sideLength: 2 * radius * Math.sin(Math.PI / numSides)
});

