const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    try {
      res.statusCode = 200;
      res.end(`This is the list of our students\n${await countStudents(database)}`);
    } catch (error) {
      res.statusCode = 500;
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
