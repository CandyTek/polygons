export const GRAPH_WIDTH = 500;
export const GRAPH_HEIGHT = 500;

export const TYPE_LINE = 'TYPE_LINE';

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
                    }
                ]
            }
        ]
    }
];

