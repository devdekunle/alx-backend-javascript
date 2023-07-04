export default function getListStudentIds(array) {
  if (Array.isArray(array) == false) {
    return [];
  }
  const arrayIds = array.map((object) => object.id);
  return arrayIds;
}
