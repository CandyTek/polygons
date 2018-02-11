import { createReducer } from 'redux-create-reducer';

import * as actions from '../constants/actions';

import * as app from './app.reducer';

import initialState from '../state';

const createReducerObject = array => array.reduce((last, item) => ({
    ...last,
    [item[0]]: (state, action) => item[1](state, action)
}), {});

const reducers = createReducerObject([
    [actions.DRAW_INIT_LOADED, app.onInitDraw]
]);

export default createReducer(initialState, reducers);

