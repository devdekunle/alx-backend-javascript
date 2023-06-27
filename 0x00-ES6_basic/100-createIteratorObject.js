export default function createIteratorObject(report) {
    let values = [];
    for (const employee of Object.values(report.allEmployees)) {
        values.push(employee);
    }
    return values;

}
