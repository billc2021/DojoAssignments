var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url);

    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', function(errors, content) {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/ninjas.html'){
        fs.readFile('ninjas.html', 'utf8', function(erros, content){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/dojos/new/dojos.html'){
        fs.readFile('dojos.html', 'utf8', function(errors, content){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else{
        response.end('URL requested is not valid')
    }

    if(request.url === '/css/style.css'){
        fs.readFile('/css/style.css', 'utf8', function(errors, content){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(content);
            response.end();
        })
    }
})

server.listen(6789);
console.log('Running on locahost at port 6789');