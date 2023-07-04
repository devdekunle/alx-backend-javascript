export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const getStudent = getListStudents
    .filter((object) => object.location === city)
    .map((object) => {
      const gradeObject = newGrades.find((obj) => obj.studentId === object.id);
      let updatedStudent = '';
      if (gradeObject) {
        updatedStudent = { ...object, grade: gradeObject.grade };
      } else {
        updatedStudent = { ...object, grade: 'N/A' };
      }
      return updatedStudent;
    });
  return getStudent;
}
