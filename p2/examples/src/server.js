const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Parsing a file using the 'fs' library that is included in Node.js
const output = fs.readFileSync('data.txt', 'utf8')
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})
console.log(JSON.stringify(output, null, 2));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});