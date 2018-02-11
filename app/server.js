/**
 * Main server app
 */

/* eslint-disable no-sync, init-declarations, global-require */

const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const webpack = require('webpack');

const webpackConfig = require('../webpack.config');

const { version } = require('../package.json');

function registerServer(app) {
    // CORS headers
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    if (process.env.NODE_ENV === 'development') {
        const conf = webpackConfig();

        const compiler = webpack(conf);

        // use webpack dev server middleware for hot reloading niceness
        app.use(require('webpack-dev-middleware')(compiler, {
            publicPath: conf.output.publicPath,
            stats: {
                colors: true,
                modules: false,
                chunks: false,
                reasons: false
            },
            hot: true,
            quiet: false,
            noInfo: false
        }));

        app.use(require('webpack-hot-middleware')(compiler, {
            log: console.log
        }));
    }

    // serve the react app statically
    app.set('views', path.join(__dirname, '../src/templates'));
    app.set('view engine', 'ejs');

    app.use(express.static(path.join(__dirname, '../static')));

    app.get('/*', (req, res) => {
        const externalStyles = req.query.prod || process.env.NODE_ENV !== 'development';

        res.render('index', {
            htmlWebpackPlugin: {
                options: {
                    version,
                    externalStyles
                }
            }
        });
    });

    // put your API endpoints here (e.g. include an Express router from another file)
    app.use(bodyParser.json());

    // catch 404
    app.use((req, res) => {
        res.status(404)
            .json({ error: true, msg: 'Not found' });
    });
}

function server() {
    const app = express();

    registerServer(app);

    const port = process.env.PORT || 3000;

    return new Promise(resolve => {
        const srv = http.createServer(app);

        srv.listen(port, '0.0.0.0', () => resolve({ app, port }));
    });
}

module.exports = server;

