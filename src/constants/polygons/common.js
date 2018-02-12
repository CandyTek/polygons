import { TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT } from '../graph';

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

export const genPolygonParams = (numSides, radius = 900) => ({
    vertices: new Array(numSides).fill(0)
        .map((item, index) => ([
            radius * Math.cos(index * 2 * Math.PI / numSides),
            radius * Math.sin(index * 2 * Math.PI / numSides)
        ])),
    sideLength: 2 * radius * Math.sin(Math.PI / numSides)
});

