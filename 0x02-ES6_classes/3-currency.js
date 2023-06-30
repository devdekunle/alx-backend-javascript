export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
