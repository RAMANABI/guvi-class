const express = require("express");
const app = express();
const queryString = require("querystring");

const port= 3000;

app.get('/echo',respondEcho)

function respondEcho(req,res){
 const { input = " " } = queryString.parse (
    req.url.split("?").slice(1).join("")
 );
    req.setHeader("content-Type","application/json");
    res.end(
        JSON.stringify({
            normal:input,
            uppercase:input.toUpperCase(),
            count:input.length,
            reverse:input.split("".reverse.join(""))
        })
    )
}
Server.listen(3000);

app.listen(port => console.log(`server listening port ${port}`));