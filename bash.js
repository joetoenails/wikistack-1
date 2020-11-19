const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (rec, res) => {
  console.log("hello world");
  res.send("<h1>Hello world</h1>");
});
const port = 3000;
app.listen(port, () => {
  console.log("listening on port ->", port);
});
