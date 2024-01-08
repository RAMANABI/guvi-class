const http=require('http')

const port= 3000;

const server = http.createServer(function (req,res){
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify({id:0, name:"Abinesh", Degree:"DCE"}));
});

server.listen(3000);

console.log(`server listening on port ${port}`);