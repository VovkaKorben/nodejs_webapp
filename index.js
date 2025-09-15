const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Moikka Maailma!!!!\n');
});

PORT_NUMBER = 8080;
server.listen(PORT_NUMBER, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT_NUMBER}/`);
});
