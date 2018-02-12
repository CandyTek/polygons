import * as graph from '../constants/graph';
import { POLYGONS } from '../constants/polygons';

const graphMaxXRange = 1000;
const graphMaxYRange = graphMaxXRange * graph.GRAPH_HEIGHT / graph.GRAPH_WIDTH;

function translatePoint(point) {
    const [x1, y1] = point;

    // assume that the origin is in the middle

    const x2 = graph.GRAPH_WIDTH * 0.5 * (1 + x1 / graphMaxXRange);
    const y2 = graph.GRAPH_HEIGHT * 0.5 * (1 - y1 / graphMaxYRange);

    return [x2, y2].map(value => Math.floor(value) + 0.5);
}

function translateDistance(distance) {
    return distance * graph.GRAPH_WIDTH / 2 / graphMaxXRange;
}

function translateCoords(subSteps) {
    return subSteps.map(step => {
        if (step.type === graph.TYPE_LINE || step.type === graph.TYPE_DIVIDE_LINE) {
            return {
                ...step,
                from: translatePoint(step.from),
                to: translatePoint(step.to)
            };
        }

        if (step.type === graph.TYPE_POINT) {
            return {
                ...step,
                at: translatePoint(step.at)
            };
        }

        if (step.type === graph.TYPE_TEST_ARC) {
            return {
                ...step,
                centre: translatePoint(step.centre),
                radius: translateDistance(step.radius)
            };
        }

        if (step.type === graph.TYPE_ANGLE_RIGHT || step.type === graph.TYPE_CIRCLE) {
            return {
                ...step,
                centre: translatePoint(step.centre),
                radius: translateDistance(step.radius)
            };
        }

        if (step.type === graph.TYPE_BISECT) {
            return {
                ...step,
                pointA: translatePoint(step.pointA),
                pointB: translatePoint(step.pointB),
                pointC: translatePoint(step.pointC)
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

    const { params: { polygon: polygonName } } = match;

    if (!(polygonName in POLYGONS)) {
        return resetState;
    }

    const polygon = processPolygon(POLYGONS[polygonName]());

    return ({
        ...state,
        polygon,
        step: 0
    });
}

export function onStepNavigated(state, { direction }) {
    if (state.step === null || !(state.polygon &&
        state.polygon.steps.length > state.step + direction &&
        state.step + direction >= 0)
    ) {
        return state;
    }

    return {
        ...state,
        step: state.step + direction
    };
}

