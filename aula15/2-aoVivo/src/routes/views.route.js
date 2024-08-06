const express = require("express");
const userService = require("../service/users.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/list", async (req, res) => {
  const users = await userService.getUsers();
  res.render("list", { users });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  const { email } = req.params;
  res.render("userDeleted", { email });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  user = user.map((u) => u.toJSON());
  return res.render("edit", { user: user[0] });
});


module.exports = router;
