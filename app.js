const http = require('http');

const server = http.createServer((req,res) => { 
    if (req.url === '/') {
        res.write('Hey There');
        res.end();
    }
});

server.listen(3000)

console.log('Listening on port 3000');



function sayHello(name) { 
    console.log('Hello ' + name);
}

sayHello('Alex');

module.exports = sayHello;
// Could also be written as module.exports.sayHello = sayHello;
// This would make the export an object rather than a single function.