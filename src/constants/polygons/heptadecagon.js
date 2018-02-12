import {
    TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT, TYPE_DIVIDE_LINE, TYPE_BISECT
} from '../graph';

import { genPolygonParams, genStepVertices, stepXAxisAndCircle, stepYAxis } from './common';

const TOTAL_SIDES = 17;

const stepB = {
    name: 'Find B',
    subSteps: [
        {
            id: '17-gon-V',
            type: TYPE_POINT,
            name: 'V',
            at: [900, 0]
        },
        {
            id: '17-gon-divide-OA',
            type: TYPE_DIVIDE_LINE,
            sketch: true,
            from: [0, 0],
            to: [0, 900]
        },
        {
            id: '17-gon-quarter-OA',
            type: TYPE_DIVIDE_LINE,
            sketch: true,
            from: [0, 0],
            to: [0, 450]
        },
        {
            id: '17-gon-B',
            type: TYPE_POINT,
            name: 'B',
            at: [0, 225]
        }
    ]
};

const stepC = {
    name: 'Find C',
    subSteps: [
        {
            id: '17-gon-bisect-OBV',
            type: TYPE_BISECT,
            sketch: true,
            pointA: [0, 0],
            pointB: [0, 225],
            pointC: [900, 0]
        },
        {
            id: '17-gon-quadsect-OBV',
            type: TYPE_BISECT,
            sketch: true,
            pointA: [0, 0],
            pointB: [0, 225],
            pointC: [175.675, 0]
        },
        {
            id: '17-gon-C',
            type: TYPE_POINT,
            name: 'C',
            at: [77.4339, 0]
        }
    ]
};

const stepD = {
    name: 'Find D',
    subSteps: [
        {
            id: '17-gon-cb-right',
            type: TYPE_ANGLE_RIGHT,
            sketch: true,
            centre: [0, 225],
            radius: 250,
            start: Math.atan2(1, 0.25) / 4 - Math.PI / 2,
            direction: -1
        },
        {
            id: '17-gon-bisect-for-D',
            type: TYPE_BISECT,
            sketch: true,
            pointA: [77.4339, 0],
            pointB: [0, 225],
            pointC: [
                250 * Math.cos(Math.atan2(1, 0.25) / 4 - Math.PI),
                225 + 250 * Math.sin(Math.atan2(1, 0.25) / 4 - Math.PI)
            ]
        },
        {
            id: '17-gon-D',
            type: TYPE_POINT,
            name: 'D',
            at: [-109.784, 0]
        }
    ]
};

const stepEFG = vertices => ({
    name: 'Find E, F and G',
    subSteps: [
        {
            id: '17-gon-divide-DV',
            type: TYPE_DIVIDE_LINE,
            sketch: true,
            from: [-109.784, 0],
            to: [900, 0]
        },
        {
            id: '17-gon-circle-DV',
            type: TYPE_CIRCLE,
            centre: [395.108, 0],
            radius: 504.892
        },
        {
            id: '17-gon-E',
            type: TYPE_POINT,
            name: 'E',
            at: [0, 314.333]
        },
        {
            id: '17-gon-circle-CE',
            type: TYPE_CIRCLE,
            centre: [77.434, 0],
            radius: 323.731
        },
        {
            id: '17-gon-F',
            type: TYPE_POINT,
            name: 'F',
            at: [vertices[5][0], 0]
        },
        {
            id: '17-gon-G',
            type: TYPE_POINT,
            name: 'G',
            at: [401.165, 0]
        }
    ]
});

const stepV3V5 = {
    name: 'Find V5 and V3',
    subSteps: [
        {
            id: '17-gon-find-v5',
            type: TYPE_ANGLE_RIGHT,
            sketch: true,
            centre: [-246.297, 0],
            radius: 150,
            start: 0,
            direction: 1
        },
        {
            id: '17-gon-line-v5',
            type: TYPE_LINE,
            sketch: true,
            from: [-246.297, 0],
            to: [-246.297, 900]
        },
        {
            id: '17-gon-find-v3',
            type: TYPE_ANGLE_RIGHT,
            sketch: true,
            centre: [401.165, 0],
            radius: 150,
            start: 0,
            direction: 1
        },
        {
            id: '17-gon-line-v3',
            type: TYPE_LINE,
            sketch: true,
            from: [401.165, 0],
            to: [401.165, 900]
        },
        {
            id: '17-gon-V5',
            type: TYPE_POINT,
            name: 'V5',
            at: [-246.297, 865.643]
        },
        {
            id: '17-gon-V3',
            type: TYPE_POINT,
            name: 'V3',
            at: [401.165, 805.647]
        }
    ]
};

const stepV4 = {
    name: 'Find V4',
    subSteps: [
        {
            id: '17-gon-bisect-v3-v5',
            type: TYPE_BISECT,
            sketch: true,
            pointA: [-246.297, 865.643],
            pointB: [0, 0],
            pointC: [401.165, 805.647]
        },
        {
            id: '17-gon-line-v4',
            type: TYPE_LINE,
            sketch: true,
            from: [0, 0],
            to: [87.655, 945.947]
        },
        {
            id: '17-gon-V4',
            type: TYPE_POINT,
            name: 'V4',
            at: [83.041, 896.161]
        }
    ]
};

const stepVertices = (vertices, sideLength) => ({
    name: 'Find the rest of the vertices',
    subSteps: genStepVertices(TOTAL_SIDES, 5, 10, vertices, sideLength)
});

export default function heptadecagon() {
    const { vertices, sideLength } = genPolygonParams(TOTAL_SIDES);

    return {
        name: 'heptadecagon',
        steps: [
            stepXAxisAndCircle,
            stepYAxis,
            stepB,
            stepC,
            stepD,
            stepEFG(vertices),
            stepV3V5,
            stepV4,
            stepVertices(vertices, sideLength)
        ]
    };
}

