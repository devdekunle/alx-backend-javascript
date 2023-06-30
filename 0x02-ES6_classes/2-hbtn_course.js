export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw Error('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw Error('Length must be a number');
    }
    this._length = length;
    if (students.constructor !== Array) {
      throw Error('Students must be an array');
    } else {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw Error('Array must be an array of strings');
        }
      }
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw Error('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw Error('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (value.constructor !== Array) {
      throw Error('Students must be an array');
    } else {
      for (const student of value) {
        if (typeof student !== 'string') {
          throw Error('Array must be an array of strings');
        }
      }
      this._students = value;
    }
  }

  get students() {
    return this._students;
  }
}
