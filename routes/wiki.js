const wikiRouter = require("express").Router();
const addPage = require("../views/addPage.js");

wikiRouter.get("/", (req, res, next) => {
  try {
    res.send("<h1> Hello World!!!</hi>");
  } catch (err) {
    res.status(500);
    next(err);
  }
});

wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

wikiRouter.post("/", (req, res) => {});

module.exports = { wikiRouter };
