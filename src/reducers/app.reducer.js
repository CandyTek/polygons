import { POLYGONS } from '../constants/polygons';

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

    const polygon = POLYGONS.find(({ name }) => name === polygonName);

    if (!(polygon && step >= 0 && step < polygon.steps.length)) {
        return resetState;
    }

    return ({
        ...state,
        polygon,
        step
    });
}

