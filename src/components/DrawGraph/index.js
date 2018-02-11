import React from 'react';
import PropTypes from 'prop-types';
import GraphStep from '../GraphStep';
import { GRAPH_WIDTH, GRAPH_HEIGHT } from '../../constants/polygons';

export default function DrawGraph({ polygon, step }) {
    const renderedSteps = polygon.steps
        .slice(0, step + 1)
        .reduce((steps, { subSteps }) => ([...steps, ...subSteps]), [])
        .map(({ id, ...item }) => (
            <GraphStep key={id} {...item} />
        ));

    return (
        <svg width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
            {renderedSteps}
        </svg>
    );
}

DrawGraph.propTypes = {
    polygon: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired
};

