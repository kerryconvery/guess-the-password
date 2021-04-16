import { Maybe } from '../Maybe';

describe('When value is not null', () => {
  const value = 'some value';
  const maybe = Maybe.some(value);

  it('should be some', () => {
    expect(maybe.isSome()).toEqual(true);
  });

  it('should not be nothing', () => {
    expect(maybe.isNothing()).toEqual(false);
  });

  it('should return the wrapped value', () => {
    expect(maybe.getOrElse('null value')).toEqual(value);
  });

  it('should map across the value', () => {
    const newMaybe = maybe.map((valueToMap => valueToMap + '1'));

    expect(newMaybe.getOrElse('null value')).toEqual('some value1');
  });
});

describe('When value is null', () => {
  const maybe = Maybe.nothing();
  const nullValue = 'null value';

  it('should be nothing', () => {
    expect(maybe.isNothing()).toEqual(true);
  });

  it('should not be some', () => {
    expect(maybe.isSome()).toEqual(false);
  });

  it('should return the else value', () => {
    expect(maybe.getOrElse(nullValue)).toEqual(nullValue);
  });

  it('should not attempt to map across a null value', () => {
    const newMaybe = maybe.map((valueToMap => valueToMap + '1'));

    expect(newMaybe.getOrElse(nullValue)).toEqual(nullValue);
  });
});