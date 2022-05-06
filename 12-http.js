// Node.js and Express.js - Full Course
// freeCodeCamp.org

const http = require('http');

// server method is looking for a callback
// in the callback function we have two parameters,
// req and res. req is the incoming request which 
// contains all useful information about what the client
// is trying to do, and res is the response (what we send)
// back to the client
const server = http.createServer((req, res) => {
    if (req.url === '/') { // if req url is equal to the home page,
        res.end('Welcome to our home page')
    } else if (req.url === '/about') { // req is for the 'about' page
        res.end('Here is our short history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you're looking for</p>
        <a href="/">Back home</a>
        `) // default response
    }
})

server.listen(5000);