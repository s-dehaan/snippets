# Nodejs Express Google App Engine
Deployable Google App Engine boilerplate application in Nodejs.

![GitHub](https://img.shields.io/github/license/s-dehaan/template-nodejs-google-app-engine?color=blue&style=for-the-badge)

## Stack:

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)

# Installation
After creating a new repository using this one as a template you can install the required packages with `npm`.

```bash
$ npm install
```

# Usage
Start the application
```bash
$ npm start

> template-nodejs-google-app-engine@1.0.0 start
> NODE_ENV=production node server.js

Application listening on http://localhost:8080.
Type Ctrl+C to quit.
```

Start the development environment with auto reloading functionality.
```bash
$ npm run start:devserver

> template-nodejs-google-app-engine@1.0.0 start:devserver
> NODE_ENV=development nodemon server.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Application listening on http://localhost:8080.
Type Ctrl+C to quit.
```

Run the tests
```bash
$ npm run test
```

Run the coverage report
```bash
$ npm run test:coverage
```

# License
[MIT](#license)