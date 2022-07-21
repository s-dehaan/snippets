# nodejs-restify
> Restify boilerplate application to get up and running quickly.

![GitHub](https://img.shields.io/github/license/s-dehaan/restify-boilerplate?style=flat-square)

# Installation
```bash
$ npm -ci install
```

# Usage example
```bash
$ npm run devserver

19:38:27.209Z  INFO restify-boilerplate: Logger initialized.
19:38:27.217Z  INFO restify-boilerplate: Server listening on port: 3000
```

Browse to: `http://localhost:3000/api/v1/status`

# Development setup
After installation there are a few npm commands available.
* `npm run coverage` Runs the code coverage tool.
* `npm run devserver` Runs the development server for local development. This server restarts when it detects changes to `.js` files.
* `npm run test <path to test file>` Runs the individual test file specified on the commandline.
* `npm run test:all` Runs all the tests.