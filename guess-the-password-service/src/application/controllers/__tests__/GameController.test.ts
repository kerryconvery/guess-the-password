import { Request, Response } from 'express';
import { GameController } from '../GameController';
import { CreateNewGameCommandHandler } from '../../commands/CreateNewGameCommand';
import { GetGuessValidationQueryHandler } from '../../queries/GetGuessValidationQuery';
import { GameFactory } from '../../../domain/services/GameFactory';
import { GameRepository } from '../../../repositories/GameRepository';
import { SimplePasswordGenerator } from '../../../domain/services/SimplePasswordGenerator';
import { Game } from '../../../domain/entities/Game';

const getGameController = (repository: GameRepository) => {
  const passwordGenerator = new SimplePasswordGenerator(['1','2','3','4','5']);
  const gameFactory = new GameFactory(passwordGenerator);
  const createNewGameCommandHandler = new CreateNewGameCommandHandler(gameFactory, repository);
  const getGuessValidationQueryHandler = new GetGuessValidationQueryHandler(repository);

  return new GameController(createNewGameCommandHandler, getGuessValidationQueryHandler);
}

const getVerifyPasswordRequest = (hint: string, guess: string): Request => {
  const request: unknown = {
    body: {
      hint,
      guess,
    }
  }

  return request as Request
}

const getMockResponse = (response: any): Response => {
  const mockResponse: unknown = {
    status: (statusCode: number) => ({
      send: (payload: any) => {
        response.statusCode = statusCode;
        response.payload = payload;
      }
    })
  }

  return mockResponse as Response;
}

describe('When creating a new game', () => {
  it('should return back a password hint', async () => {
    const gameController = getGameController(new GameRepository());

    const response = {
      statusCode: 0,
      payload: {
        hint: '',
      },
    }

    const mockResponse = getMockResponse(response);

    await gameController.createNewGame(null, mockResponse);

    expect(response.statusCode).toEqual(201);
    expect(response.payload.hint).toBeDefined();
    expect(response.payload.hint).not.toEqual('');
  });
});

describe('When the guessed password is incorrect', () => {
  const gameRepository = new GameRepository();
  const gameController = getGameController(gameRepository);
  const game = new Game('12345', '54321');
  const guess = '43315';

  const request = getVerifyPasswordRequest(game.hint, guess);

  const response = {
    statusCode: 0,
    payload: {
      hint: '',
      guess: '',
      isCorrect: true,
      validCharacters: {},
    },
  }

  const mockResponse = getMockResponse(response);

  gameRepository.add(game);

  it('should return back that the guess was wrong', async () => {
    await gameController.verifyPassword(request, mockResponse)

    expect(response.statusCode).toEqual(200);
    expect(response.payload.isCorrect).toEqual(false);
    expect(response.payload.hint).toEqual(game.hint);
    expect(response.payload.guess).toEqual(guess);
  });

  it('should indicate which of the guessed characters are correct', async () => {
    await gameController.verifyPassword(request, mockResponse)

    expect(response.statusCode).toEqual(200);
    expect(response.payload.validCharacters).toEqual(['3', '5']);
  });
});

describe('When the guessed password is correct', () => {
  const gameRepository = new GameRepository();
  const gameController = getGameController(gameRepository);
  const game = new Game('12345', '54321');
  const guess = '12345';

  const request = getVerifyPasswordRequest(game.hint, guess);

  const response = {
    statusCode: 0,
    payload: {
      hint: '',
      guess: '',
      isCorrect: true,
    },
  }

  const mockResponse = getMockResponse(response);

  gameRepository.add(game);

  it('should return back that the guess was correct', async () => {
    await gameController.verifyPassword(request, mockResponse)

    expect(response.statusCode).toEqual(200);
    expect(response.payload.isCorrect).toEqual(true);
    expect(response.payload.hint).toEqual(game.hint);
    expect(response.payload.guess).toEqual(guess);
  });
});

describe('When guessing the password', () => {
  it('should return back hint not found if the supplied hint does not exist', async () => {
    const gameRepository = new GameRepository();
    const gameController = getGameController(gameRepository);

    const request = getVerifyPasswordRequest('3416', '7683');

    const response = {
      statusCode: 0,
    }

    const mockResponse = getMockResponse(response);

    await gameController.verifyPassword(request, mockResponse);

    expect(response.statusCode).toEqual(404);
  });
});
