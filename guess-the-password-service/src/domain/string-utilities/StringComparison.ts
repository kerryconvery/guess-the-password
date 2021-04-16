import _difference from 'lodash/difference';
import _isEmpty from 'lodash/isEmpty';

export class StringComparison {
  public static hasSameCharacters(compare: string, to: string): boolean {
    if (compare.length !== to.length) {
      return false;
    }
    
    return _isEmpty(_difference(compare.split(''), to.split('')));
  }
}