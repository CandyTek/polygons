import * as actions from '../constants/actions';

export const drawInitLoaded = match => ({ type: actions.DRAW_INIT_LOADED, match });

export const stepNavigated = direction => ({ type: actions.STEP_NAVIGATED, direction });

