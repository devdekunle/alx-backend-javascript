const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return; // Exit the callback early in case of an error
      }
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
      resolve(); // Resolve the promise here, since the data processing is done
    });
  });
}
module.exports = countStudents;
