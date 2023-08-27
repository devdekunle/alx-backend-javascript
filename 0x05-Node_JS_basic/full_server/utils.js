const fs = require('fs');

function handleData(data) {
  const lines = data.trim().split('\n');
  const students = lines.map((line) => line.split(','));
  const cs = [];
  const swe = [];
  for (const student of students) {
    if (student[3] === 'CS') {
      cs.push(student[0]);
    } else if (student[3] === 'SWE') {
      swe.push(student[0]);
    }
  }
  return { cs, swe };
}
export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error(err));
      }
      resolve(handleData(data));
    });
  });
}
