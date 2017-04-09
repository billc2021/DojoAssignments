var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL: ',request.url);
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function(errors, content){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(erros, content){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/cars/new'){
        fs.readFile('views/new.html', 'utf8', function(errors, content){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, content){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/css/style.css'){
        fs.readFile('css/style.css', 'utf8', function(errors, content){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cats/cat1.jpeg'){
        fs.readFile('images/cats/cat1.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cats/cat2.jpeg'){
        fs.readFile('images/cats/cat2.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cats/cat3.jpeg'){
        fs.readFile('images/cats/cat3.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cats/cat4.jpeg'){
        fs.readFile('images/cats/cat4.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cars/car1.jpeg'){
        fs.readFile('images/cars/car1.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cars/car2.jpeg'){
        fs.readFile('images/cars/car2.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cars/car3.jpeg'){
        fs.readFile('images/cars/car3.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else if(request.url === '/images/cars/car4.jpeg'){
        fs.readFile('images/cars/car4.jpeg', function(errors, content){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(content);
            response.end();
        })
    }
    else {
        response.end('Requested URL not valid!')
    }

})

server.listen(6789);
console.log('Running on localhost at port 6789');
