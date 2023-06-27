export default function createReportObject(employeesList) {
  const employeeObject = {

    allEmployees: employeesList,

    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return employeeObject;
}
