const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);
app.use(router);    


app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
