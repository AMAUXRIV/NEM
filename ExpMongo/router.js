const express = require("express");
const router = express.Router();
const { connect } = require("./connection");

router.get("/", function (req, res) {
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  try {
    const client = await connect();
    const db = client.db("kampus");
    const users = await db.collection("myCollection").find().toArray();
    res.send({ data: users });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
