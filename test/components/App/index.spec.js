import { expect } from 'chai';
import '../../browser';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';
import Message from '../../../src/containers/Message';

describe('<App />', () => {
    it('should render its basic structure', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.is('div.boilerplate-app')).to.equal(true);
        expect(wrapper.children()).to.have.length(2);
    });

    it('should render a title element', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.childAt(0).is('h1')).to.equal(true);
        expect(wrapper.childAt(0).text()).to.equal('It works!');
    });

    it('should render a <Message /> container', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.childAt(1).is(Message)).to.equal(true);
    });
});

