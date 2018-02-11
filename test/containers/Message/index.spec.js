import { expect } from 'chai';
import '../../browser';
import React from 'react';
import shallow from '../../shallow-with-store';
import { createMockStore } from 'redux-test-utils';
import Message from '../../../src/containers/Message';
import * as C from '../../../src/constants/actions';

describe('<Message />', () => {
    it('should render its basic structure', () => {
        const wrapper = shallow(<Message />, createMockStore({})).dive();

        expect(wrapper.is('div.message-outer')).to.equal(true);
        expect(wrapper.children()).to.have.length(3);
    });

    it('should render a message result', () => {
        const wrapper = shallow(<Message />, createMockStore({ message: 'foo' })).dive();

        expect(wrapper.childAt(0).is('span.message-result')).to.equal(true);
        expect(wrapper.childAt(0).text()).to.equal('foo');
    });

    it('should render an interactive input', () => {
        const store = createMockStore({ inputValue: 'foo' });
        const wrapper = shallow(<Message />, store).dive();

        expect(wrapper.childAt(1).is('input')).to.equal(true);

        wrapper.childAt(1).simulate('change', { target: { value: 'bar' } });

        expect(store.isActionDispatched({ type: C.INPUT_CHANGED, value: 'bar' })).to.equal(true);
    });

    it('should render an interactive submit button', () => {
        const store = createMockStore({});
        const wrapper = shallow(<Message />, store).dive();

        expect(wrapper.childAt(2).is('button.message-submit-button')).to.equal(true);

        wrapper.childAt(2).simulate('click');

        expect(store.isActionDispatched({ type: C.BUTTON_CLICKED, message: null })).to.equal(true);
    });
});

