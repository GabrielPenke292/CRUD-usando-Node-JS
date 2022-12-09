const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if(request.url === '/products'){
        response.end(JSON.stringify({
            message: 'Página de produtos'
        }))
    }

    else if(request.url === '/users'){
        response.end(JSON.stringify({
            message: 'Página de usuários'
        }))
    }

    response.end(JSON.stringify({
        message: 'teste'
    }))
}).listen(4001, () => (console.log("Server is running in port 4001")));