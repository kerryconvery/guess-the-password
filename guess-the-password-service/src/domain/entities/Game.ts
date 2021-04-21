import { StringComparison } from '../string-utilities/StringComparison';
import { ArgumentException } from '../exceptions/ArgumentException';

export class Game {
  private _password: string;
  private _hint: string;

  constructor(password: string, hint: string) {
    if (password === '') {
      throw new ArgumentException(
        `Password cannot be blank`
      );
    }

    if (hint.length !== password.length) {
      throw new ArgumentException(
        `Password hint ${hint} is not the same length as the password ${password}`
      );
    }

    if (!StringComparison.hasSameCharacters(hint, password)) {
      throw new ArgumentException(
        `Password hint ${hint} does not contain the same characters as the password ${password}`
      );
    }

    if (hint === password) {
      throw new ArgumentException(
        `Password hint ${hint} should not equal the password ${password}`
      );
    }

    this._password = password;
    this._hint = hint;
  }

  public verifyGuess(guessedPassword: string): boolean {
    return guessedPassword === this._password;
  }

  public getMatchedCharacterIndexes(guessedPassword: string): Array<number> {
    const characterPositions = new Array<number>();

    let index = 0;

    while (index < guessedPassword.length || index < this._password.length) {
      if (guessedPassword[index] === this._password[index]) {
        characterPositions.push(index);
      }
      index++;
    }

    return characterPositions;
  }

  public get password(): string {
    return this._password;
  }

  public get hint(): string {
    return this._hint;
  }
}