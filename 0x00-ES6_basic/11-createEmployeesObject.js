export default function createEmployeesObject(departmentName, employees) {
  const dataObject = {
    [`${departmentName}`]: employees,
  };
  return dataObject;
}
