/**
 * @module api/v1/routes/status
 */
'use_strict';

const controllers = require('../controllers/status');

/**
 * @param {import('restify').Server} server
 */
module.exports.load = (server) => {
    server.get('/api/v1/status', controllers.getStatusController);
};
