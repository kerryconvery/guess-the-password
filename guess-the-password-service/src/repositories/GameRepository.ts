import { Game } from '../domain/entities/Game';
import { Maybe } from '../types/Maybe';

export class GameRepository {
  private _storage = new Map<string, Game>(); 

  public add(game: Game) {
    this._storage.set(game.hint, game);
  }

  public get(hint: string): Maybe<Game> {
    if (this._storage.has(hint)) {
      return Maybe.some(this._storage.get(hint));
    }
    return Maybe.nothing();
  }
}