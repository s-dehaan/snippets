# Nodejs Express Google App Engine
<div id="top"></div>

Get up and running Google [App Engine][App Engine].

This simple application will get you up and running quickly using the Google [App Engine][App Engine] [standard environment][standard environment] for Node.js.

![GitHub](https://img.shields.io/github/license/s-dehaan/snippets?color=blue&style=for-the-badge)

## Stack:

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Mocha](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)

# Prerequisits
* A google cloud project
* nodejs
* npm

# Installation
Install the NPM packages.
```sh
npm -ci install
```
<p align="right">(<a href="#top">back to top</a>)</p>

# Usage
To run the development environment with automatic file reloading use:
```sh
npm run dev
```

To run the tests use:
```sh
npm test
```

To check the code coverage use:
```sh
npm run coverage
```

To run the application use:
```sh
npm start
```
<p align="right">(<a href="#top">back to top</a>)</p>

# Deploying to Google App Engine
We are going to mention two methods for deploying to Google's [App Engine][App Engine] [standard environment][standard environment]. The manual way, and the automated way using Google's [Cloud Build][Cloud Build] tool.

## Prerequisites
Initialize your App Engine app within your project and choose its region. I am using the [gcloud][gcloud] tool here but you can use the cloud shell in the browser as well. This step is required the first time you setup your project and it does not matter which method you choose afterwards.
```sh
gcloud app create --project=[YOUR_PROJECT_ID]
```

## Method 1 (manual)
Using the [gcloud][gcloud] tools on your local system run the following command from the root of the repository:
```sh
gcloud app deploy --project=[YOUR_PROJECT_ID]
```

## Method 2 (cloud build)
The `cloudbuild.yaml` which triggers the [Cloud Build][Cloud Build] process is already included in the repository. I would advice you to follow the instructions [here](https://cloud.google.com/build/docs/automating-builds/create-manual-triggers) and create a trigger.

Depending on which branch you choose. A commit to the chosen branch will now trigger a build and an automatic deployment within your projects [App Engine][App Engine] environment. While running the tests and checking the coverage. These steps can be disabled in the `cloudbuild.yaml`.
<p align="right">(<a href="#top">back to top</a>)</p>

# License
Distributed under the MIT License. See [LICENSE](#license) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Internal Document Links -->
[App Engine]: https://cloud.google.com/appengine/docs/standard/nodejs "App Engine"
[Cloud Build]: https://cloud.google.com/build/docs/overview "Cloud Build"
[gcloud]: https://cloud.google.com/sdk/gcloud "gcloud"
[standard environment]: https://cloud.google.com/appengine/docs/the-appengine-environments "environment"
