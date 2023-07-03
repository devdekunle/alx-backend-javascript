export default function getListStudentIds(array) {
  if (array.constructor !== Array) {
    return [];
  }
  const arrayIds = array.map((object) => object.id);
  return arrayIds;
}
