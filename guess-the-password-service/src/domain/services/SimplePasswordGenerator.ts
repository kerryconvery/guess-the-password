import _shuffle from 'lodash/shuffle';
import { IPasswordGeneratorService } from '../IPasswordGeneratorService';

export class SimplePasswordGenerator implements IPasswordGeneratorService {
  private _passwordSeedCharacters: string[];

  constructor(passwordSeedCharacters: Array<string>) {
    this._passwordSeedCharacters = passwordSeedCharacters;
  }

  public generate(length: number): string {
    const uniqueCharacters = this.removeDuplicateCharacters(this._passwordSeedCharacters);
    const shuffedCharacters = _shuffle(uniqueCharacters);

    return shuffedCharacters
      .slice(0, length)
      .join('');
  }

  private removeDuplicateCharacters(value: Array<string>): Array<string> {
    return  [...new Set(value)];
  }
}