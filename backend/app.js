const http = require('http');
const express = require('express')
const app = express()
const router = require('./routes/routes')
const bodyParser = require('body-parser')
require ('./database/db-config')

const hostname = '127.0.0.1';
const url = '/api';
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get(url, (req, res) => {
    res.status(200).json({ status: 'API OK' })
})

app.use(url, router)

const server = http.createServer(app, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});