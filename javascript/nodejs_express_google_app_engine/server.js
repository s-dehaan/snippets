'use strict';
const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Application listening on http://localhost:${PORT}.`);
    console.log('Type Ctrl+C to quit.');
});
