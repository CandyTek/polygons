/* eslint-disable max-lines */

import {
    TYPE_LINE, TYPE_POINT, TYPE_TEST_ARC, TYPE_CIRCLE, TYPE_ANGLE_RIGHT, TYPE_DIVIDE_LINE, TYPE_BISECT
} from '../graph';

import { genPolygonParams, stepXAxisAndCircle, stepYAxis } from './common';

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
    subSteps: [
        {
            id: '17-gon-arc-v6',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[5],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 9.8
        },
        {
            id: '17-gon-line-v6',
            type: TYPE_LINE,
            final: true,
            from: vertices[5],
            to: vertices[6]
        },
        {
            id: '17-gon-arc-v7',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[6],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 10.8
        },
        {
            id: '17-gon-line-v7',
            type: TYPE_LINE,
            final: true,
            from: vertices[6],
            to: vertices[7]
        },
        {
            id: '17-gon-arc-v8',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[7],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 11.8
        },
        {
            id: '17-gon-line-v8',
            type: TYPE_LINE,
            final: true,
            from: vertices[7],
            to: vertices[8]
        },
        {
            id: '17-gon-arc-v9',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[8],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 12.8
        },
        {
            id: '17-gon-line-v9',
            type: TYPE_LINE,
            final: true,
            from: vertices[8],
            to: vertices[9]
        },
        {
            id: '17-gon-arc-v10',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[9],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 13.8
        },
        {
            id: '17-gon-line-v10',
            type: TYPE_LINE,
            final: true,
            from: vertices[9],
            to: vertices[10]
        },
        {
            id: '17-gon-arc-v11',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[10],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 14.8
        },
        {
            id: '17-gon-line-v11',
            type: TYPE_LINE,
            final: true,
            from: vertices[10],
            to: vertices[11]
        },
        {
            id: '17-gon-arc-v12',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[11],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 15.8
        },
        {
            id: '17-gon-line-v12',
            type: TYPE_LINE,
            final: true,
            from: vertices[11],
            to: vertices[12]
        },
        {
            id: '17-gon-arc-v13',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[12],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 16.8
        },
        {
            id: '17-gon-line-v13',
            type: TYPE_LINE,
            final: true,
            from: vertices[12],
            to: vertices[13]
        },
        {
            id: '17-gon-arc-v14',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[13],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 17.8
        },
        {
            id: '17-gon-line-v14',
            type: TYPE_LINE,
            final: true,
            from: vertices[13],
            to: vertices[14]
        },
        {
            id: '17-gon-arc-v15',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[14],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 18.8
        },
        {
            id: '17-gon-line-v15',
            type: TYPE_LINE,
            final: true,
            from: vertices[14],
            to: vertices[15]
        },
        {
            id: '17-gon-arc-v16',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[15],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 19.8
        },
        {
            id: '17-gon-line-v16',
            type: TYPE_LINE,
            final: true,
            from: vertices[15],
            to: vertices[16]
        },
        {
            id: '17-gon-arc-v',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[16],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 20.8
        },
        {
            id: '17-gon-line-v',
            type: TYPE_LINE,
            final: true,
            from: vertices[16],
            to: vertices[0]
        },
        {
            id: '17-gon-arc-v1',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[0],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 21.8
        },
        {
            id: '17-gon-line-v1',
            type: TYPE_LINE,
            final: true,
            from: vertices[0],
            to: vertices[1]
        },
        {
            id: '17-gon-arc-v2',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[1],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 22.8
        },
        {
            id: '17-gon-line-v2',
            type: TYPE_LINE,
            final: true,
            from: vertices[1],
            to: vertices[2]
        },
        {
            id: '17-gon-arc-v3',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[2],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 23.8
        },
        {
            id: '17-gon-line-v2-to-v3',
            type: TYPE_LINE,
            final: true,
            from: vertices[2],
            to: vertices[3]
        },
        {
            id: '17-gon-arc-v4',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[3],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 24.8
        },
        {
            id: '17-gon-line-v3-to-v4',
            type: TYPE_LINE,
            final: true,
            from: vertices[3],
            to: vertices[4]
        },
        {
            id: '17-gon-arc-v5',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: vertices[4],
            radius: sideLength,
            start: 2 * Math.PI / 17 * 25.8
        },
        {
            id: '17-gon-line-v4-to-v5',
            type: TYPE_LINE,
            final: true,
            from: vertices[4],
            to: vertices[5]
        }
    ]
});

export default function heptadecagon() {
    const { vertices, sideLength } = genPolygonParams(17);

    /*
    const vertices = [
        [900, 0],
        [839.225, 325.117],
        [665.108, 606.326],
        [401.165, 805.647],
        [83.042, 896.161],
        [-246.297, 865.643],
        [-542.371, 718.216],
        [-765.195, 473.789],
        [-884.676, 165.375],
        [-884.676, -165.375],
        [-765.195, -473.789],
        [-542.371, -718.216],
        [-246.297, -865.643],
        [83.042, -896.161],
        [401.165, -805.647],
        [665.108, -606.326],
        [839.225, -325.117]
    ];
    */

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

