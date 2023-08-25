const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.statusCode = 200;
  res.send('Hello Holberton School');
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
