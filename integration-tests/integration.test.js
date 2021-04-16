import axios from 'axios';
import config from '../config.json';

const baseUrl = config.env[process.env.APP_ENV];

const startANewGame = () => (
  axios({
    url: `${baseUrl}/new-password`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  })
)

const guessThePassword = (hint, guess) => (
  axios({
    url: `${baseUrl}/verify-password`,
    method: 'post',
    data: { hint, guess },
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
      return status >= 200 && status < 500;
    },
  })
)

describe('When starting a new game', () => {
  it('should return a hint and a 201 status code', async () => {
    const response = await startANewGame();

    expect(response.status).toBe(201);
    expect(response.data.hint).toBeDefined();
    expect(response.data.hint).not.toEqual('');
  });
});

describe('When guessing the password', () => {
  it('should return with an ok', async () => {
    const createResponse = await startANewGame();

    const response = await guessThePassword(createResponse.data.hint, '2234');

    expect(response.status).toBe(200);
  });

  it('should return with a bad request if the hint was not supplied', async () => {
    await startANewGame();

    const response = await guessThePassword(null, '2234');

    expect(response.status).toBe(400);
  });

  it('should return with a bad request if the guess was not supplied', async () => {
    await startANewGame();

    const response = await guessThePassword('3123');

    expect(response.status).toBe(400);
  });
});
