const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const userService = require("../service/user.service");
const { isValidatePassword, createHash } = require("../utils/index");
const passport = require("passport");

const passportCall = require("../utils/passport.utils");

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/user/faillogin" }),
  (req, res) => {
    console.log(req.user);

    const user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      role: req.user.role,
      token: req.user.token,
    };
    req.session.user = user;
    return res.cookie("accessToken", req.user.token).redirect("/home");
  }
);

router.get("/faillogin", (req, res) => {
  res.render("loginFail");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("accessToken").redirect("/");
});

router.post("/register", passportCall("jwt"), async (req, res) => {
  try {
    console.log(req.body);
    const user = req.body;
    const newUser = await userService.createUser(user);
    return res.redirect("/list");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:uid", passportCall("jwt"), async (req, res) => {
  try {
    const { uid } = req.params;
    const user = req.body
    console.log(user)
    const userUpdated = await userService.updateUser(user, uid)
    return res.status(200).json(userUpdated)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:email", passportCall("jwt"), async (req, res) => {
    try {
      const { email } = req.params;
      const userUpdated = await userService.deleteUser(email)
      return res.status(200).json(userUpdated)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
