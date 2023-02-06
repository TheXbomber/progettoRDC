// const http = require('http');

// const hostname = '0.0.0.0';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`This is the app server (${process.env.INSTANCE})`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  console.log('Received request for /');
  res.send(`This is the app server (${process.env.INSTANCE})`);
});

app.get('/test', (req, res) => {
  console.log('Received request for /test');
  res.send('This is a test');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`)
});