const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    res.end(`This is the list of our students ${await countStudents(database)}`);
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
