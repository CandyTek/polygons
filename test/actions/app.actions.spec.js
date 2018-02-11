import { expect } from 'chai';
import * as A from '../../src/actions/app.actions';
import * as C from '../../src/constants/actions';

describe('App actions', () => {
    describe('buttonClicked', () => {
        it('should return BUTTON_CLICKED with an optional message', () => {
            expect(A.buttonClicked('foo')).to.deep.equal({
                type: C.BUTTON_CLICKED,
                message: 'foo'
            });

            expect(A.buttonClicked()).to.deep.equal({
                type: C.BUTTON_CLICKED,
                message: null
            });
        });
    });

    describe('inputChanged', () => {
        it('should return INPUT_CHANGED with a value', () => {
            expect(A.inputChanged('foo')).to.deep.equal({
                type: C.INPUT_CHANGED,
                value: 'foo'
            });
        });
    });
});

