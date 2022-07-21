/**
 * @module api/v1/controllers/status
 */
'use_strict';

/**
 * Returns an object describing the state of the API.
 * @typedef {import('restify').RequestHandler}
 *
 * @param {import('restify').Request} request
 * @param {import('restify').Response} response
 * @param {import('restify').Next} next
 *
 * @returns {Object}
 */
const getStatusController = (request, response, next) => {
    const status = {
        status: 'OK'
    };

    response.send(200, status);

    return next();
};

module.exports = {
    getStatusController: getStatusController
};
