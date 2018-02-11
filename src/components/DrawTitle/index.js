import React from 'react';
import PropTypes from 'prop-types';

export default function DrawTitle({ polygon, step }) {
    return (
        <div className="draw-title-outer">
            <h2 className="title">
                {'How to draw a '}
                <span className="polygon">{polygon}</span>
            </h2>
            <h3 className="subtitle">
                {'Step '}{step + 1}
            </h3>
        </div>
    );
}

DrawTitle.propTypes = {
    polygon: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired
};

