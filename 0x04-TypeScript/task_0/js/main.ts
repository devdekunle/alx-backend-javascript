interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: Samuel,
    lastName: Abraham,
    age: 30,
    location: Abuja
};

const student2: Student = {
    firstName: Chiamaka,
    lastName: Izukanne,
    age: 22,
    location: Abuja

};

const studentsList = [student1, student2];

const body: string = document.querySelector("body");
const table: string = document.createElement("table");
for (const item of studentsList) {
    const tableRow: string = document.createElement("tr");
    const tableData1: string = document.createElement("td");
    const text1: string = document.createTextNode(item.firstName);
    tableData1.appendChild(text1);
    tableRow.appendChild(tableData1);
    const tableData2: string = document.createElement("td");
    const text2: string = document.createTextNode(item.location);
    tableData2.appendChild(text2);
    tableRow.appendChild(tableData2);
    table.appendChild(tableRow);
}
body.appendChild(table);
