export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
    const getStudent = getListStudents
    .filter((object) => object.location === city)
    .map((newObject) => {
        const gradeObject = newGrades.find((obj) => obj.studentId === newObject.id);

        if (gradeObject) {
            newObject.grade = gradeObject.grade
        }
        else {
            newObject.grade = 'N/A';
        }
        return newObject;
    });
    return getStudent;
}
