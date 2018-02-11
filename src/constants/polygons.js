export const GRAPH_WIDTH = 500;
export const GRAPH_HEIGHT = 500;

export const TYPE_LINE = 'TYPE_LINE';
export const TYPE_ANGLE_RIGHT = 'TYPE_ANGLE_RIGHT';

export const POLYGONS = [
    {
        name: 'heptadecagon',
        steps: [
            {
                name: 'Axes',
                subSteps: [
                    {
                        id: '7-gon-x-axis',
                        type: TYPE_LINE,
                        from: [-20, 0],
                        to: [20, 0]
                    },
                    {
                        id: '7-gon-x-to-y-axis',
                        type: TYPE_ANGLE_RIGHT,
                        centre: [0, 0],
                        radius: 2,
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

