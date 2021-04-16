import { GameFactory } from '../GameFactory';
import { SimplePasswordGenerator }  from '../../services/SimplePasswordGenerator';

describe('When creating a new game', () => {
  const passwordLength = 8;
  const seedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const gameFactory = new GameFactory(new SimplePasswordGenerator(seedCharacters));
  const game = gameFactory.createGame(passwordLength);

  it(`should contain a password of length ${passwordLength}`, () => {
    expect(game.password).toHaveLength(passwordLength);
  });
})