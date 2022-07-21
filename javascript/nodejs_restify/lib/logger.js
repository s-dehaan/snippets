/**
 * @module lib/logger
 */
'use_strict';

const bunyan = require('bunyan');
const config = require('./config');

const log = bunyan.createLogger({
    name: config.name,
    serializers: {
        err: bunyan.stdSerializers.err,
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res
    }
});

log.info('Logger initialized.');

module.exports = {
    log: log
};
