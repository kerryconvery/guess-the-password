import axios from 'axios';

const createNewPassword = (baseUrl) => () => (
  axios({
    url: `${baseUrl}/new-password`,
    method: 'POST',
  }).then(res => res.data)
);

const verifyPassword = (baseUrl) => (hint, guess) => (
  axios({
    url: `${baseUrl}/verify-password`,
    method: 'POST',
    data: {
      hint,
      guess
    }
  }).then(res => res.data)
);

export const getGuessThePasswordServiceApi = (serviceUrl) => {
  return {
    createNewPassword: createNewPassword(serviceUrl),
    verifyPassword: verifyPassword(serviceUrl),
  }
}
