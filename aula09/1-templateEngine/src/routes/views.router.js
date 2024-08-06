const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
  const {name, lastName} = req.params
  const user = { name, lastName, role: "admin" };
  res.render("index", user);
});


module.exports = router;
