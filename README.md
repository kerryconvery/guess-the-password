# Guess the password game
Guess the password code challenge.  This application consisted of a NodeJS backend writted in typescript and a React frontend written in pure JS.  In order to run the application you'll need to start both the backend and frontend.  See the steps to run below.

### Requirements to run
* Docker v2
* Lerna v3.22+ `npm install --global lerna`
* NodeJs v14+
* Npm 6.14+

### Commands
* `lerna bootstrap` - Install all dependencies
* `lerna run build` - Build all components
* `lerna run start:docker --stream` - Starts the application inside a docker container
* `lerna run stop:docker --stream` - Stops the running application
* `lerna run test --stream` - run all unit tests
* `lerna run test:integration --stream` - run the integration tests (web service must be running first)

### How to run the application
1. Clone to repository to your local machine
2. Change the to folder into which the repository was cloned.
3. Install all dependencies `lerna bootstrap`
4. Start the web service and web server `lerna run start:docker --stream`
5. Navigate your browser to http://localhost:8080