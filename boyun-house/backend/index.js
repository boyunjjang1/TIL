const express = require('./config/express')
const http = require('http')

const port = 3000;

const server = http.createServer(express()).listen(port)