const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  try {
    res.statusCode = 200;
    res.send(`This is the list of our students\n${await countStudents(database)}`);
  } catch (error) {
    res.statusCode = 500;
    res.send(`This is the list of our students\n${error.message}`);
  }
});
app.listen(port, host, () => {
  console.log('...');
});
