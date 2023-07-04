export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList) === true) {
    const idSum = studentList.reduce((sum, currentValue) => sum + currentValue.id, 0);
    return idSum;
  }
  return [];
}
