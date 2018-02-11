import { connect } from 'react-redux';

import { buttonClicked, inputChanged } from '../../actions/app.actions';

import React from 'react';
import PropTypes from 'prop-types';

function Message({ message, inputValue, onChange, onClick }) {
    return <div className="message-outer">
        <span className="message-result">{message}</span>
        <input value={inputValue} onChange={onChange} />
        <button className="message-submit-button" onClick={onClick}>{'Click me!'}</button>
    </div>;
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    message: state.message,
    inputValue: state.inputValue
});

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(inputChanged(evt.target.value)),
    onClick: () => dispatch(buttonClicked())
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);

