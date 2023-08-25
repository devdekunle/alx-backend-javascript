const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.end(`This s the list of our students\n${await countStudents(database)}`);
});
app.listen(port, host, () => {
  console.log('...');
});
