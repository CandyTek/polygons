import * as polygons from '../constants/polygons';

const graphMaxXRange = 20;
const graphMaxYRange = graphMaxXRange * polygons.GRAPH_HEIGHT / polygons.GRAPH_WIDTH;

function translatePoint(point) {
    const [x1, y1] = point;

    // assume that the origin is in the middle

    const x2 = polygons.GRAPH_WIDTH * 0.5 * (1 + x1 / graphMaxXRange);
    const y2 = polygons.GRAPH_HEIGHT * 0.5 * (1 - y1 / graphMaxYRange);

    return [x2, y2].map(value => Math.floor(value) + 0.5);
}

function translateCoords(subSteps) {
    return subSteps.map(step => {
        if (step.type === polygons.TYPE_LINE) {
            return {
                ...step,
                from: translatePoint(step.from),
                to: translatePoint(step.to)
            };
        }

        if (step.type === polygons.TYPE_POINT) {
            return {
                ...step,
                at: translatePoint(step.at)
            };
        }

        if (step.type === polygons.TYPE_ANGLE_RIGHT || step.type === polygons.TYPE_CIRCLE) {
            return {
                ...step,
                centre: translatePoint(step.centre),
                radius: step.radius * polygons.GRAPH_WIDTH / 2 / graphMaxXRange
            };
        }

        return step;
    });
}

function processPolygon(polygon) {
    return {
        ...polygon,
        steps: polygon.steps.map(step => ({
            ...step,
            subSteps: translateCoords(step.subSteps)
        }))
    };
}

export function onInitDraw(state, { match }) {
    const resetState = ({
        ...state,
        polygon: null,
        step: null
    });

    if (!(typeof match === 'object' &&
        typeof match.params === 'object' && 'polygon' in match.params)) {

        return resetState;
    }

    const { params: { polygon: polygonName, step: stepRaw } } = match;

    const step = Number(stepRaw) || 0;

    const polygonDef = polygons.POLYGONS.find(({ name }) => name === polygonName);

    if (!(polygonDef && step >= 0 && step < polygonDef.steps.length)) {
        return resetState;
    }

    const polygon = processPolygon(polygonDef);

    return ({
        ...state,
        polygon,
        step
    });
}

