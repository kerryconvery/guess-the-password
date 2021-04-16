import _isEmpty from 'lodash/isEmpty';
import _shuffle from 'lodash/shuffle';
import _split from 'lodash/split';
import { IPasswordGeneratorService } from '../IPasswordGeneratorService';
import { Game } from '../entities/Game';

export class GameFactory {
  private _passwordGeneratorService: IPasswordGeneratorService;

  constructor(passwordGeneratorService: IPasswordGeneratorService) {
    this._passwordGeneratorService = passwordGeneratorService;
  }

  public createGame(passwordLength: number): Game {
    const gamePassword = this._passwordGeneratorService.generate(passwordLength);
    const passwordHint = _shuffle(gamePassword.split('')).join('');

    return new Game(gamePassword, passwordHint);
  }
}