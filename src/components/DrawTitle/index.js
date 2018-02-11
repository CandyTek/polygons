import React from 'react';
import PropTypes from 'prop-types';

export default function DrawTitle({ polygon, step }) {
    const { name, steps } = polygon;

    const { name: stepName } = steps[step];

    return (
        <div className="draw-title-outer">
            <h2 className="title">
                {'How to draw a '}
                <span className="polygon">{name}</span>
            </h2>
            <h3 className="subtitle">
                {'Step '}{step + 1}{' of '}{steps.length}{': '}{stepName}
            </h3>
        </div>
    );
}

DrawTitle.propTypes = {
    polygon: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired
};

