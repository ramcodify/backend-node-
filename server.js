const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const route = require('./router')
const app = express();
app.use(express.json())


//routes

app.use('/api',route)

//db connection
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("connection", () => console.log("error"));
db.once("open", () => {
  console.log("db connected succesfully");
});

app.listen(process.env.PORT, () => {
  console.log(`server  started at ${process.env.PORT}`);
});
module.exports = router