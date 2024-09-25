const express = require("express");
const userService = require("../service/user.service");
const { generateToken, authToken } = require("../utils");

const router = express.Router();


router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/register", (req, res) => {
  console.log(req.session)
  res.render("register");
});
router.get("/list", authToken, async (req, res) => {
  console.log("LIST")
  let users = await userService.getUsers();
  console.log(users)
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
 // res.status(200).json(users);
  //res.render("list", { users });
  return res.render("list", { users });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  const { email } = req.params;
  res.render("userDeletado", { email });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  user = user.map((u) => u.toJSON());
  res.render("edit", { user: user[0] });
});

module.exports = router;
