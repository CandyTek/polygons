import React from 'react';
import { Link } from 'react-router-dom';

export default function PolygonChooser() {
    return (
        <div className="polygon-chooser-outer">
            <h2 className="title-choose-polygon">
                {'Choose a polygon to draw:'}
            </h2>
            <div className="polygon-chooser-inner">
                <Link className="button-pentagon" to="/pentagon">
                    <span className="preview" />
                    <span className="title">{'Pentagon'}</span>
                </Link>
                <Link className="button-heptadecagon" to="/heptadecagon">
                    <span className="preview" />
                    <span className="title">{'Heptadecagon'}</span>
                </Link>
            </div>
        </div>
    );
}

