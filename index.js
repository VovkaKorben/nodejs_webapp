const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Moikka Maailma!!!!\n');
});

PORT_NUMBER = 8080;
IP_ADDR = '0.0.0.0'
server.listen(PORT_NUMBER, IP_ADDR, () => {
    console.log(`Server running at http://${IP_ADDR}:${PORT_NUMBER}/`);
});
