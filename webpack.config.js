/* eslint-disable global-require */
/**
 * Returns webpack configuration objects
 */

if (process.env.DOTENV_INJECT === 'true' || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

function webpackConfig() {
    if (process.env.NODE_ENV === 'development') {
        return require('./webpack/conf.dev')();
    }

    return require('./webpack/conf.prod')();
}

module.exports = () => webpackConfig();

