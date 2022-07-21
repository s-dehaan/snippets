import express from 'express';

const server = express();

server.use('/', (request, response, next) => {
    response.json({
        status: 'running',
    });

    return next();
});

const PORT = Number(process.env.PORT) || 8080;

server.listen(PORT, () => {
    console.log(`Application listening on port: ${PORT}`);
    console.log('Press Ctrl+C to exit the application');
});

export default server;
