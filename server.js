// bring in express
const express = require('express');

// create express server
const server = express();

// middleware
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h3>Test page</h3>`);
});

module.exports = server;