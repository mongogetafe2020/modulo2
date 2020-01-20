let http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    resp.end('¡Hola Universo!');
}).listen(8080, () => {
    console.log('Servidor en http://localhost:8080');
});


