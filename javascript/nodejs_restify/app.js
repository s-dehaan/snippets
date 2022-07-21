// External imports
const restify = require('restify');

// Local imports
const apiV1Routes = require('./api/v1/routes/index');
const config = require('./lib/config');
const { log } = require('./lib/logger');

const server = restify.createServer({
    log: log,
    name: config.name,
    version: config.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.authorizationParser());
server.use(restify.plugins.requestLogger());

apiV1Routes.load(server);

/* istanbul ignore if */
if (require.main === module) {
    server.listen(config.port, () => {
        server.log.info(`Server listening on port: ${config.port}`);
    });
}

module.exports = server;
