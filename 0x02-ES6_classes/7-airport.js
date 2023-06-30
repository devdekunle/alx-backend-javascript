export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
