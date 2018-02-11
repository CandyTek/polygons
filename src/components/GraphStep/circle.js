import React from 'react';
import PropTypes from 'prop-types';

export default function GraphStepCircle({ centre, radius, lineProps }) {
    const [cx, cy] = centre;

    const coords = { cx, cy, 'r': radius };

    return (
        <circle {...coords} {...lineProps} />
    );
}

GraphStepCircle.propTypes = {
    centre: PropTypes.array.isRequired,
    radius: PropTypes.number.isRequired,
    lineProps: PropTypes.object.isRequired
};

