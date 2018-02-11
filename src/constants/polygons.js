import {
    TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT, TYPE_DIVIDE_LINE, TYPE_BISECT
} from './graph';

export const POLYGONS = [
    {
        name: 'heptadecagon',
        steps: [
            {
                name: 'X Axis and Circle',
                subSteps: [
                    {
                        id: '17-gon-x-axis',
                        type: TYPE_LINE,
                        from: [-1000, 0],
                        to: [1000, 0]
                    },
                    {
                        id: '17-gon-origin',
                        type: TYPE_POINT,
                        name: 'O',
                        at: [0, 0]
                    },
                    {
                        id: '17-gon-circle',
                        type: TYPE_CIRCLE,
                        centre: [0, 0],
                        radius: 900
                    }
                ]
            },
            {
                name: 'Y Axis',
                subSteps: [
                    {
                        id: '17-gon-x-to-y-axis',
                        type: TYPE_ANGLE_RIGHT,
                        centre: [0, 0],
                        radius: 150,
                        start: 0,
                        direction: 1
                    },
                    {
                        id: '17-gon-y-axis',
                        type: TYPE_LINE,
                        from: [0, 1000],
                        to: [0, -1000]
                    },
                    {
                        id: '17-gon-A',
                        type: TYPE_POINT,
                        name: 'A',
                        at: [0, 900]
                    }
                ]
            },
            {
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
                        from: [0, 0],
                        to: [0, 900]
                    },
                    {
                        id: '17-gon-quarter-OA',
                        type: TYPE_DIVIDE_LINE,
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
            },
            {
                name: 'Find C',
                subSteps: [
                    {
                        id: '17-gon-bisect-OBV',
                        type: TYPE_BISECT,
                        pointA: [0, 0],
                        pointB: [0, 225],
                        pointC: [900, 0]
                    },
                    {
                        id: '17-gon-quadsect-OBV',
                        type: TYPE_BISECT,
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
            },
            {
                name: 'Find D',
                subSteps: [
                    {
                        id: '17-gon-cb-right',
                        type: TYPE_ANGLE_RIGHT,
                        centre: [0, 225],
                        radius: 250,
                        start: Math.atan2(1, 0.25) / 4 - Math.PI / 2,
                        direction: -1
                    },
                    {
                        id: '17-gon-bisect-for-D',
                        type: TYPE_BISECT,
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
            }
        ]
    }
];

