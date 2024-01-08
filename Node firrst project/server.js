const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json()); //middleware

//connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/bookdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb..."))
  .catch((err) => console.error("could not connect mongodb", err));


const port = 3000;
app.listen(port,() => console.log("Listening on port 3000...."));
