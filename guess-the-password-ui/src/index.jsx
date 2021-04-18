import React from 'react';
import ReactDOM from 'react-dom';
import { ServiceApiProvider } from './providers/ServiceeApiProvider';
import GuessThePasswordPage from './guess-the-password-page/GuessThePasswordPage';
import { getGuessThePasswordServiceApi } from './api/guessThePasswordServiceApi';
import config from '../config.json';

const configuration = config.env[process.env.APP_ENV];
const serviceApi = getGuessThePasswordServiceApi(configuration.guessThePasswordServiceUrl);

ReactDOM.render(
  <ServiceApiProvider serviceApi={serviceApi}>
    <GuessThePasswordPage />
  </ServiceApiProvider>,
  document.getElementById('app')
);
