'use strict';

const app = require('../app');
const request = require('supertest');

const server = app.listen();

describe('Checking if the application is running.', () => {
    afterAll(() => {
        server.close();
    });

    test('GET /', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('hello world');
    });

    test('GET /status', async () => {
        const response = await request(server).get('/status');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });
});
