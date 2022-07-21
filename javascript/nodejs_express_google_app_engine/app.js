'use strict';

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.json({
        msg: 'hello world'
    });
});

app.get('/status', (request, response) => {
    response.json({
        status: 'OK'
    });
});

module.exports = app;
