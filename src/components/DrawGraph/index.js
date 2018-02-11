import React from 'react';
import PropTypes from 'prop-types';
import GraphStep from '../GraphStep';

export default function DrawGraph({ polygon, step }) {
    const renderedSteps = polygon.steps
        .slice(0, step + 1)
        .reduce((steps, { subSteps }) => ([...steps, ...subSteps]), [])
        .map(({ id, ...item }) => (
            <GraphStep key={id} {...item} />
        ));

    return (
        <svg>
            {renderedSteps}
        </svg>
    );
}

DrawGraph.propTypes = {
    polygon: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired
};

