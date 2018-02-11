import React from 'react';

import Message from '../../containers/Message';

export default function App() {
    let version = 0;
    if (typeof APP_VERSION === 'string') {
        version = APP_VERSION; // eslint-disable-line no-undef
    }
    const className = `boilerplate-app version-${version}`;

    return <div className={className}>
        <h1>{'It works!'}</h1>
        <Message />
    </div>;
}

