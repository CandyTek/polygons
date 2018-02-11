import { POLYGONS } from '../constants/polygons';

export function onInitDraw(state, { match }) {
    if (!(typeof match === 'object' && typeof match.params === 'object' &&
        'polygon' in match.params && match.params.polygon in POLYGONS)) {

        return ({
            ...state,
            polygon: null,
            step: null
        });
    }

    const { params: { polygon, step: stepRaw } } = match;

    const step = Number(stepRaw) || 0;

    return ({
        ...state,
        polygon,
        step
    });
}

