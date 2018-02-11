import { TYPE_LINE, TYPE_POINT, TYPE_CIRCLE, TYPE_ANGLE_RIGHT } from './graph';

export const POLYGONS = [
    {
        name: 'heptadecagon',
        steps: [
            {
                name: 'X Axis and Circle',
                subSteps: [
                    {
                        id: '7-gon-x-axis',
                        type: TYPE_LINE,
                        from: [-20, 0],
                        to: [20, 0]
                    },
                    {
                        id: '7-gon-origin',
                        type: TYPE_POINT,
                        name: 'O',
                        at: [0, 0]
                    },
                    {
                        id: '7-gon-circle',
                        type: TYPE_CIRCLE,
                        centre: [0, 0],
                        radius: 18
                    }
                ]
            },
            {
                name: 'Y Axis',
                subSteps: [
                    {
                        id: '7-gon-x-to-y-axis',
                        type: TYPE_ANGLE_RIGHT,
                        centre: [0, 0],
                        radius: 3,
                        start: 0,
                        direction: 1
                    },
                    {
                        id: '7-gon-y-axis',
                        type: TYPE_LINE,
                        from: [0, 20],
                        to: [0, -20]
                    }
                ]
            }
        ]
    }
];

