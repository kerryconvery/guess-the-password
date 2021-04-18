import { ICommandHandler } from '../ICommandHandler';
import { GameFactory } from '../../domain/services/GameFactory';
import { GameRepository } from '../../repositories/GameRepository';

export class CreateNewGameCommand {
};

export class CreateNewGameResponse {
  constructor(hint: string) {
    this.hint = hint;
  }

  public hint: string;
}

export class CreateNewGameCommandHandler implements ICommandHandler<CreateNewGameCommand, CreateNewGameResponse> {
  private _gameFactory: GameFactory;
  private _gameRepository: GameRepository;

  constructor(gameFactory: GameFactory, gameRepository: GameRepository) {
    this._gameFactory = gameFactory;
    this._gameRepository = gameRepository;
  }

  public handle(command: CreateNewGameCommand): CreateNewGameResponse {
    const game = this._gameFactory.createGame();
    
    this._gameRepository.add(game);

    return new CreateNewGameResponse(game.hint);
  }
}