import { TYPE_POINT, TYPE_LINE, TYPE_TEST_ARC } from '../graph';
import { genPolygonParams, genStepVertices, stepXAxisAndCircle, stepYAxis } from './common';

const TOTAL_SIDES = 5;

const stepVertices = (vertices, sideLength) => ({
    name: 'Find the rest of the vertices',
    subSteps: genStepVertices(TOTAL_SIDES, 1, 4, vertices, sideLength)
});

const stepB = {
    name: 'Find B',
    subSteps: [
        {
            id: '5-gon-G',
            type: TYPE_POINT,
            name: 'G',
            at: [0, -900]
        },
        {
            id: '5-gon-bisect-OG-arc1',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: [0, -900],
            radius: 900,
            start: Math.PI / 6
        },
        {
            id: '5-gon-bisect-OG-arc2',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: [0, -900],
            radius: 900,
            start: Math.PI * 5 / 6
        },
        {
            id: '5-gon-bisect-OG-line',
            type: TYPE_LINE,
            sketch: true,
            from: [-800, -450],
            to: [800, -450]
        },
        {
            id: '5-gon-B',
            type: TYPE_POINT,
            name: 'B',
            at: [0, -450]
        }
    ]
};

const stepC = {
    name: 'Find C',
    subSteps: [
        {
            id: '5-gon-BA-test-1',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: [0, -450],
            radius: 1006.231,
            start: Math.PI / 7
        },
        {
            id: '5-gon-BA-test-2',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: [0, -450],
            radius: 1006.231,
            start: Math.PI / 2
        },
        {
            id: '5-gon-C',
            type: TYPE_POINT,
            name: 'C',
            at: [0, 556.231]
        }
    ]
};

const stepV1 = {
    name: 'Find V1',
    subSteps: [
        {
            id: '5-gon-arc-to-v1-1',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: [900, 0],
            radius: 1058.013,
            start: 5 * Math.PI / 6
        },
        {
            id: '5-gon-arc-to-v1-2',
            type: TYPE_TEST_ARC,
            sketch: true,
            centre: [900, 0],
            radius: 1058.013,
            start: 11 * Math.PI / 16
        },
        {
            id: '5-gon-V1',
            type: TYPE_POINT,
            name: 'V1',
            at: [278.115, 855.951]
        }
    ]
};

export default function pentagon() {
    const { vertices, sideLength } = genPolygonParams(TOTAL_SIDES);

    return {
        name: 'pentagon',
        steps: [
            stepXAxisAndCircle,
            stepYAxis,
            stepB,
            stepC,
            stepV1,
            stepVertices(vertices, sideLength)
        ]
    };
}

