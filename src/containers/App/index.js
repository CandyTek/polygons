import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import Header from '../../components/Header';
import PolygonChooser from '../../components/PolygonChooser';
import DrawOuter from '../DrawOuter';

function App({ appVersion }) {
    const className = classNames('polygons-app', `version-${appVersion}`);

    return (
        <div className={className}>
            <Header />
            <Switch>
                <Route path="/" exact component={PolygonChooser} />
                <Route path="/:polygon(heptadecagon)" component={DrawOuter} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

App.propTypes = {
    appVersion: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    appVersion: state.appVersion
});

export default connect(mapStateToProps)(App);

