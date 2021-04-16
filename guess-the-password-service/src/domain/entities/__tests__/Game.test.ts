import { Game } from '../Game';
import { ArgumentException } from '../../exceptions/ArgumentException';

describe('When creating a new game instance', () => {
  it('should not throw an exception when the hint has the same charaters as the password', () => {
    expect(() => new Game('1234', '4231')).not.toThrow(ArgumentException);
  });
  
  it('should throw an exception when the password is blank', () => {
    expect(() => new Game('', '4231')).toThrow(ArgumentException);
  });
  
  it('should throw an exception when the hint does not have the same characters as the password', () => {
    expect(() => new Game('1234', '4251')).toThrow(ArgumentException);
  });

  it('should throw an exception when the hint length does equal the password length', () => {
    expect(() => new Game('1234', '423')).toThrow(ArgumentException);
  });

  it('should throw an exception when the hint equals the password', () => {
    expect(() => new Game('1234', '1234')).toThrow(ArgumentException);
  });
});

describe('When verifying the guessed password', () => {
  const game = new Game('1234', '3212');

  it('should return true if the guessed password matches the actual password', () => {
    expect(game.verifyGuess('1234')).toEqual(true);
  })

  it('should return false if the guessed password does not match the actual password', () => {
    expect(game.verifyGuess('4324')).toEqual(false);
  });

  it('should return back the guessed characters that match the password', () => {
    expect(game.getMatchedCharacters('1374')).toEqual(['1','4']);
  });

  it('should return back an empty list if no characters match the password', () => {
    expect(game.getMatchedCharacters('8795')).toEqual([]);
  });

  it('should return back all matched characters when the guessed password is longer than the actual password', () => {
    expect(game.getMatchedCharacters('137431')).toEqual(['1','4']);
  });

  it('should return back all matched characters when the guessed password is shorter than the actual password', () => {
    expect(game.getMatchedCharacters('543')).toEqual(['3']);
  });

  it('should return back all matched characters when the guessed password is equal to the actualy password', () => {
    expect(game.getMatchedCharacters('1234')).toEqual(['1','2', '3', '4']);
  });

  it('should return back an empty list when not guessed characters match the actualy password', () => {
    expect(game.getMatchedCharacters('4321')).toEqual([]);
  });
});