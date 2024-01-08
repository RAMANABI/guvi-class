const http=require('http')
const express = require("express");
const app = express();
const queryString = require("querystring");
const fs=require("fs");

const port= 3000;

app.get("/",respondText);
app.get("/json", respondJSON);
app.get("/notFound", respondNotFound);
app.get("/echo", respondEcho);
app.get("/static/*",respondStatic);


function respondStatic(req,res){
 console.log("Current directory name:",__dirname);
 console.log("file name:",req.url.split("/static"));
 const fileName =`${__dirname}/public${req.url.split("/static")[1]}`;
 fs.createReadStream(fileName)
 .on("error",() => respondNotFound(req,res))
 .pipe(res);
}


function respondEcho(req, res) {
  const { input = " " } = queryString.parse(
    req.url.split("?").slice(1).join("")
  );
  req.setHeader("content-Type", "application/json");
  res.end(
    JSON.stringify({
      normal: input,
      uppercase: input.toUpperCase(),
      count: input.length,
      reverse: input.split("".reverse.join("")),
    })
  );
}



const server = http.createServer(function (req,res){
    if(req.url === "/"){
        return respondText(req,res);
    }
    if(req.url === "/json"){
        return respondJSON(req,res);
    }

    respondNotFound(req,res);
});


function respondText(req,res){
    res.setHeader("Contenr-Type","text/plain");
    res.end('Abinesh');
}

function respondJSON(req,res){
    res.setHeader("Content-Text","application/json");
    res.end(JSON.stringify({id:0,name:"Abinesh",dept:"DCE"}))
}

function respondNotFound(req ,res){
    res.setHeader("Content-Type","text/plain");
    res.end("Not Found");
}
server.listen(3000);

console.log(`server listening on port ${port}`);
