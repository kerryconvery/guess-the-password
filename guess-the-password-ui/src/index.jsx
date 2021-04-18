import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ServiceApiProvider } from './providers/ServiceeApiProvider';
import { getGuessThePasswordServiceApi } from './api/guessThePasswordServiceApi';
import config from '../config.json';

const configuration = config.env[process.env.APP_ENV];
const serviceApi = getGuessThePasswordServiceApi(configuration.guessThePasswordServiceUrl);

ReactDOM.render(
  <ServiceApiProvider serviceApi={serviceApi}>
    <App />
  </ServiceApiProvider>,
  document.getElementById('app')
);
