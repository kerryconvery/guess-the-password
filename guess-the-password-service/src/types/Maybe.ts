export class Maybe<Value> {
  private _hasValue: boolean = false;
  private _value: Value;

  constructor(value: Value | null) {
    this._value = value;
    this._hasValue = value !== null;
  }

  public map<Result>(mapper: (value: Value) => Result): Maybe<Result> {
    if (!this._hasValue) {
      return Maybe.nothing();
    }

    return new Maybe<Result>(mapper(this._value));
  }

  public getOrElse(elseValue: Value): Value {
    if (this._hasValue) {
      return this._value;
    }

    return elseValue;
  }

  public isNothing(): boolean {
    return !this._hasValue;
  }

  public isSome(): boolean {
    return this._hasValue;
  }

  public static some<Value>(value: Value): Maybe<Value> {
    return new Maybe(value);
  }

  public static nothing<Value>(): Maybe<Value> {
    return new Maybe(null);
  }
}