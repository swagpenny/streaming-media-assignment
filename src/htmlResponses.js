const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const clienttwo = fs.readFileSync(`${__dirname}/../client/client2.html`);
const clientthree = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getClienttwo = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(clienttwo);
  response.end();
};

const getClientthree = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(clientthree);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getClienttwo = getClienttwo;
module.exports.getClientthree = getClientthree;
