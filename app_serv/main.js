// const ronin = require('ronin-server')
// const mocks = require('ronin-mocks')

// const server = ronin.server()

// server.use('/', mocks.server(server.Router(), false, true))
// server.start()

const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`This is the app server (${process.env.INSTANCE})`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});