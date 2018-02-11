import * as actions from '../constants/actions';

export const buttonClicked = (message = null) => ({ type: actions.BUTTON_CLICKED, message });

export const inputChanged = value => ({ type: actions.INPUT_CHANGED, value });

