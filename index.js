/**
 * Entry point for server
 */

require('./app/server')().then(server => {
    console.log('Server running on port', server.port);
});

