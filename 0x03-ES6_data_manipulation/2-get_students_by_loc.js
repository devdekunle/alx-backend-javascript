export default function getStudentsByLocation(students, city) {
  if (students.constructor !== Array) {
    return [];
  }
  const studentsLocation = students.filter((object) => object.location === city);
  return studentsLocation;
}
