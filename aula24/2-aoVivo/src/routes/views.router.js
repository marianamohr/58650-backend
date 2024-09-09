const express = require("express");
const userService = require("../service/user.service");
const passportCall = require("../utils/passport.utils");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/home", (req, res) => {
  res.render("index");
});

router.get("/list", async (req, res) => {
  console.log(req.session);
  const users = await userService.getUsers();
  console.log(users)
  res.render("list", {
    users,
    isAdmin: req.session.user.role === "admin" || false,
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    isAdmin: req.session.user.role === "admin" || false,
  });
});

router.get("/edit/:uid", async (req, res) => {
  const { uid } = req.params;
  let user = await userService.getUsersById(uid);
  res.render("edit", {
    user,
  });
});

router.get("/usuario-deletado/:email", async (req, res) => {
  res.render("userDeletado", {
    email: req.params.email,
  });
});

module.exports = router;
