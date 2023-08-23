const fs = require('fs');

const countStudent = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    const newLines = [];
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] !== '') {
        newLines.push(lines[i]);
      }
    }
    console.log(`Number of students: ${newLines.length}`);
    const fields = {};
    for (const row of newLines) {
      if (row) {
        const student = row.split(',');
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }
    }
    for (const field in fields) {
      if (fields[field]) {
        const list = fields[field];
        const count = list.length;
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudent;
