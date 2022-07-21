'use_strict';

const assert = require('assert');
const request = require('supertest');
const server = require('../../../../app');

describe('GET /api/v1/status', () => {
    it('should return a status: OK', done => {
        request(server).get('/api/v1/status').expect('Content-Type', /json/).expect(200).end((error, response) => {
            if (error) return done(error);

            assert.deepStrictEqual(response.body.status, 'OK');

            done();
        });
    });
});
