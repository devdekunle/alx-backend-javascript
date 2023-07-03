export class HolbertonClass {
  constructor(year, location) {
    if (typeof year !== 'number') {
      throw new Error('Year must be a number');
    }
    this._year = year;
    if (typeof location !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    if (typeof firstName !== 'string') {
      throw new Error('First Name must be a string');
    }
    this._firstName = firstName;
    if (typeof lastName !== 'string') {
      throw new Error('Last Name must be a atring');
    }
    this._lastName = lastName;
    if (holbertonClass instanceof HolbertonClass) {
      this._holbertonClass = holbertonClass;
    } else {
      throw new Error('holbertonClass must be an instance of HolbertonClass');
    }
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
