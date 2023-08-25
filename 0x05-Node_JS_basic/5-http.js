const countStudents = require('./3-read_file_async');
const http = require('http');
const database = process.argv[2]

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!')
    } else if (req.url === '/students') {
        res.end('This is the list of our students');
        
    } else {
        res.end('Not found\n');
    }

});

app.listen(port, hostname, () => {
    console.log('...');
});

module.exports = app;
