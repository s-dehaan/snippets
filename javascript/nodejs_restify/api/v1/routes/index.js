/**
 * @module routes/index
 */
'use_strict';

/** This file initialzes all other routes */;

const statusRoutes = require('./status');

/**
 * @param {import('restify').Server} server
 */
module.exports.load = (server) => {
    statusRoutes.load(server);
};
