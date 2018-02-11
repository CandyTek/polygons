import React from 'react';
import PropTypes from 'prop-types';
import DrawTitle from '../DrawTitle';

export default function DrawOuter({ match }) {
    const polygon = match.params.polygon;
    const step = Number(match.params.step) || 0;

    return (
        <div className="draw-outer">
            <DrawTitle polygon={polygon} step={step} />
        </div>
    );
}

DrawOuter.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            polygon: PropTypes.string.isRequired,
            step: PropTypes.string
        })
    }).isRequired
};

