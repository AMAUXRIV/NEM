const express = require('express');
const router = express.Router();


router.get("/", function (req, res) {
  res.send("Hello World!");
});

router.get("/users/:id", function (req, res) {
  const id = req.params.id;
  if (Number(id) === 1) {
    const user = {
      id: 1,
      name: "John Doe",
    };

    res.send(user);
  } else {
    const user = {
      id: 2,
      name: "John ",
    };
    res.send(user);
  }
});

router.get("/users", function (req, res) {
  const name = req.query.name;
  res.send(name);
});
router.post("/users", function (req, res) {
  res.send("Got a POST request");
});

router.put("/users", function (req, res) {
  res.send("Got a PUT request at /user");
});

router.delete("/users", function (req, res) {
  res.send("Got a DELETE request at /user");
});

module.exports = router;