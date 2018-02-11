import { expect } from 'chai';
import * as R from '../../src/reducers/app.reducer';

describe('App reducer', () => {
    describe('handleButtonClick', () => {
        it('should update the state\'s message with the input value or optional custom message', () => {
            expect(R.handleButtonClick({}, { message: 'foo' })).to.deep.equal({
                message: 'foo'
            });

            expect(R.handleButtonClick({ message: 'foo' }, { message: 'bar' })).to.deep.equal({
                message: 'bar'
            });

            expect(R.handleButtonClick({ message: 'foo', inputValue: 'bar' }, { message: 'baz' }))
                .to.deep.equal({ message: 'baz', inputValue: 'bar' });

            expect(R.handleButtonClick({ message: 'foo', inputValue: 'bar' }, {}))
                .to.deep.equal({ message: 'bar', inputValue: 'bar' });
        });
    });

    describe('handleInputChange', () => {
        it('should update the state\'s inputValue with the new value', () => {
            expect(R.handleInputChange({}, { value: 'foo' })).to.deep.equal({
                inputValue: 'foo'
            });
        });
    });
});

