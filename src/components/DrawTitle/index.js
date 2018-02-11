import React from 'react';
import PropTypes from 'prop-types';

export default function DrawTitle({ polygon, step, onStepNavigation }) {
    const { name, steps } = polygon;

    const { name: stepName } = steps[step];

    let nextStepLink = null;
    let prevStepLink = null;

    if (step < steps.length - 1) {
        nextStepLink = (
            <button className="nav-link-next-step" onClick={onStepNavigation(1)}>
                {'Next'}
            </button>
        );
    }

    if (step > 0) {
        prevStepLink = (
            <button className="nav-link-prev-step" onClick={onStepNavigation(-1)}>
                {'Previous'}
            </button>
        );
    }

    return (
        <div className="draw-title-outer">
            <h2 className="title">
                {'How to draw a '}
                <span className="polygon">{name}</span>
            </h2>
            <h3 className="subtitle">
                {'Step '}{step + 1}{' of '}{steps.length}{': '}{stepName}
            </h3>
            {prevStepLink}
            {nextStepLink}
        </div>
    );
}

DrawTitle.propTypes = {
    polygon: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired,
    onStepNavigation: PropTypes.func.isRequired
};

