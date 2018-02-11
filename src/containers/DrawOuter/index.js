import { connect } from 'react-redux';
import { drawInitLoaded } from '../../actions/app.actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawTitle from '../../components/DrawTitle';
import DrawGraph from '../../components/DrawGraph';

class DrawOuter extends Component {
    componentDidMount() {
        this.props.onInitDraw(this.props.match);
    }
    render() {
        const { polygon, step } = this.props;

        if (!polygon) {
            return null;
        }

        return (
            <div className="draw-outer">
                <DrawTitle polygon={polygon} step={step} />
                <DrawGraph polygon={polygon} step={step} />
            </div>
        );
    }
}

DrawOuter.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            polygon: PropTypes.string.isRequired,
            step: PropTypes.string
        })
    }).isRequired,
    polygon: PropTypes.object,
    step: PropTypes.number,
    onInitDraw: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    polygon: state.polygon,
    step: state.step
});

const mapDispatchToProps = dispatch => ({
    onInitDraw: match => dispatch(drawInitLoaded(match))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawOuter);

