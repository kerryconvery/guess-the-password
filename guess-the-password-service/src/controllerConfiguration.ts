import { IController } from './application/IController';
import { GameController } from './application/controllers/GameController';
import { CreateNewGameCommandHandler } from './application/commands/CreateNewGameCommand';
import { GetGuessValidationQueryHandler } from './application/queries/GetGuessValidationQuery';
import { SimplePasswordGenerator } from './domain/services/SimplePasswordGenerator';
import { GameRepository } from './repositories/GameRepository';
import { GameFactory } from './domain/services/GameFactory';

const passwordSeedCharacters: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const passwordLength = 8;

export const configureControllers = (): IController[] => {
  const gameRepository = new GameRepository();
  const passwordGenerator = new SimplePasswordGenerator(passwordSeedCharacters, passwordLength);
  const gameFactory = new GameFactory(passwordGenerator);

  const createNewGameCommandHandler = new CreateNewGameCommandHandler(gameFactory, gameRepository);
  const getGuessValidationQueryHandler = new GetGuessValidationQueryHandler(gameRepository);
  
  return [
    new GameController(createNewGameCommandHandler, getGuessValidationQueryHandler),
  ];
}