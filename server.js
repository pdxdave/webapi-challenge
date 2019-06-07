// bring in express and other tools
const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

// create express server
const server = express();

// middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// custom middleware
server.use(logger)

// require routers
const ProjectRouter = require('./data/routers/projRouter');

server.use('/api/project', ProjectRouter);

server.get('/', (req, res) => {
    res.send(`<h3>Test page</h3>`);
});


// custom middleware
function logger(req, res, next){
    console.log(`${req.method} Request`);
    next();
}

module.exports = server;