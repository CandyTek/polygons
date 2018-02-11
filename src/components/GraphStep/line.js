import React from 'react';
import PropTypes from 'prop-types';

export default function GraphStepLine({ from, to, lineProps, ...props }) {
    const [x1, y1] = from;
    const [x2, y2] = to;

    const coords = { x1, y1, x2, y2 };

    return (
        <line {...coords} {...lineProps} {...props} />
    );
}

GraphStepLine.propTypes = {
    from: PropTypes.array.isRequired,
    to: PropTypes.array.isRequired,
    lineProps: PropTypes.object.isRequired
};

