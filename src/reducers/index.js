import { createReducer } from 'redux-create-reducer';

import * as actions from '../constants/actions';

// import all your reducer functions here
// the reducers are what carry out application logic, and they are
// all pure functions of the immutable application state (which is global)
import * as app from './app.reducer';

import initialState from '../state';

const createReducerObject = array => array.reduce((last, item) => ({
    ...last,
    [item[0]]: (state, action) => item[1](state, action)
}), {});

const reducers = createReducerObject([
    [actions.BUTTON_CLICKED, app.handleButtonClick],
    [actions.INPUT_CHANGED, app.handleInputChange]
]);

export default createReducer(initialState, reducers);

