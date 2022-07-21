import server from '../server';
import request from 'supertest';

describe('Checking if the application is running', () => {
    describe('GET /', () => {
        it('should return status 200', (done) => {
            request(server).get('/').expect(200, done);
        });

        it('should return {"status":"running"}', (done) => {
            request(server).get('/').expect('{"status":"running"}').end(done);
        });
    });
});
