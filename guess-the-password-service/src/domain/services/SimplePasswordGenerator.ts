import _shuffle from 'lodash/shuffle';
import { IPasswordGeneratorService } from '../IPasswordGeneratorService';

export class SimplePasswordGenerator implements IPasswordGeneratorService {
  private _passwordSeedCharacters: string[];
  private _passwordLength: number;

  constructor(passwordSeedCharacters: Array<string>, passwordLength: number) {
    this._passwordSeedCharacters = passwordSeedCharacters;
    this._passwordLength = passwordLength;
  }

  public generate(): string {
    const uniqueCharacters = this.removeDuplicateCharacters(this._passwordSeedCharacters);
    const shuffedCharacters = _shuffle(uniqueCharacters);

    return shuffedCharacters
      .slice(0, this._passwordLength)
      .join('');
  }

  private removeDuplicateCharacters(value: Array<string>): Array<string> {
    return  [...new Set(value)];
  }
}