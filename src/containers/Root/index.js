import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { StaticRouter, Route, Switch } from 'react-router-dom';

import App from '../../components/App';

const context = {};

export default function Root({ store }) {
    return <Provider store={store}>
        <StaticRouter location={window.location.pathname} context={context}>
            <Switch>
                <Route key="index" path="/" component={App} exact={false} />
            </Switch>
        </StaticRouter>
    </Provider>;
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

