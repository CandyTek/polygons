import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../../components/App';

export default function Root({ store }) {
    return <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route key="index" path="/" component={App} exact={false} />
            </Switch>
        </BrowserRouter>
    </Provider>;
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

