'use strict';

const http = require('http');
const express = require('express');
const app = express();
const db = require('./src/db');

app.get('/', (req, res) => {
  db.incCount(req.connection.remoteAddress).then((result) => {
    let value = result.rows[0].value;
    res.send('Hello World! You have visited this page ' + value);
  }).catch((err) => {
    console.error(err);
    res.status(500).send('Error accessing database');
  });
});

const server = http.createServer(app);
server.listen(8080, () => console.log('Example app listening on port 8080!'));

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown(e) {
  console.log('Begin shutdown');

  server.close(() => {
    console.log('Shutdown complete');
    process.exit(0);
  });
}




