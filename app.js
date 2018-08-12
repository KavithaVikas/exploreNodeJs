const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
     console.log("root url");
     res.write("hello world!");
     res.end();
    }
    else if(req.url === '/api/notes'){
        console.log("inside api url");
        res.write(JSON.stringify({"title":"secret", "body":"hello world!"}))
        res.end();
    }
    

})
console.log("server started");
server.listen(3001);