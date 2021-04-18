import { SimplePasswordGenerator } from '../SimplePasswordGenerator';
import { StringComparison } from '../../string-utilities/StringComparison';

describe('When generating a password', () => {
  const passwordLength = 10;
  const seedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const simplePasswordGenerator = new SimplePasswordGenerator(seedCharacters, passwordLength);
  const password = simplePasswordGenerator.generate();

  it('should return a password of the specified length', () => {
    expect(password).toHaveLength(passwordLength);
  });

  it('should return a password that does not equal the seed string', () => {
    expect(password).not.toEqual(seedCharacters.join(''));
  });

  it('should return a password that contins only the characters in the seed string', () => {
    expect(StringComparison.hasSameCharacters(password, seedCharacters.join('')));
  });

  it('should return a different password each time', () => {
    const password1 = simplePasswordGenerator.generate();
    const password2 = simplePasswordGenerator.generate();

    expect(password1).not.toEqual(password2);
  });

  it('should return a password with no repeated characters', () => {
    const withDuplicates = ['1', '1', '1','1','1','2','1', '1'];
    const uniquePassword = new SimplePasswordGenerator(withDuplicates, 2).generate();

    expect(uniquePassword).toHaveLength(2);
    expect(StringComparison.hasSameCharacters('12', uniquePassword)).toEqual(true);
  });

  it('should return a password up to the at least the number of available unique seed characters', () => {
    const withDuplicates = ['1','2','1'];
    const uniquePassword = new SimplePasswordGenerator(withDuplicates, withDuplicates.length).generate();

    expect(uniquePassword).toHaveLength(2);
  })
})