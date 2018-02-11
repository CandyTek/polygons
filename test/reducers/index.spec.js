import { expect } from 'chai';
import reducer from '../../src/reducers';
import state from '../../src/state';
import * as appActions from '../../src/actions/app.actions';
import * as appReducer from '../../src/reducers/app.reducer';

describe('Global reducer', () => {
    describe('BUTTON_CLICKED', () => {
        it('should run handleButtonClick reducer', () => {
            expect(reducer(state, appActions.buttonClicked()))
                .to.deep.equal(appReducer.handleButtonClick(state, {}));
        });
    });
    describe('INPUT_CHANGED', () => {
        it('should run handleInputChange reducer', () => {
            expect(reducer(state, appActions.inputChanged('foo')))
                .to.deep.equal(appReducer.handleInputChange(state, { value: 'foo' }));
        });
    });
});

