import { StringComparison } from '../StringComparison';

describe('When comparing if one string has the same characters as another', () => {
  it('should return true if the lengths are the same and all characters were found', () => {
    const comparedString = 'abc';
    const targetString = 'abc';

    expect(StringComparison.hasSameCharacters(comparedString, targetString)).toEqual(true);
  });

  it('should return false if the lengths do not match', () => {
    const comparedString = 'abc';
    const targetString = 'abcd';

    expect(StringComparison.hasSameCharacters(comparedString, targetString)).toEqual(false);
  });

  it('should return false if the compared string contains at least one character that is not in the target string', () => {
    const comparedString = 'abd';
    const targetString = 'abc';

    expect(StringComparison.hasSameCharacters(comparedString, targetString)).toEqual(false);
  });

})