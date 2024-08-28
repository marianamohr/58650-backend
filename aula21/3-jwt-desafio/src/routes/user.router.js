const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const userService = require("../service/user.service");
const { generateToken, authToken } = require("../utils");
const router = express.Router();

router.post("/login", async (req, res) => {
  const user = req.body;
  let userFound = await userService.getUserByEmail(user.username);
  console.log(userFound)
  if (userFound.length === 0) {
    return res.render("failLogin", { name: user.username });
  }
  console.log(user.password, userFound[0].password)
  if (user.password === userFound[0].password) {
    userFound = userFound.map((u) => u.toJSON());
    const token = generateToken(userFound[0])
    console.log(token)
    return res.render("index", {token:token});
  }
  res.render("userCreated", { name: user.username });
});

router.post("/", validationUser, async (req, res) => {
  const user = req.body;
  const userCreated = await userService.createUser(user);
  res.render("userCreated", { name: userCreated.first_name });
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await userService.deleteUser(email);
  res.render("userDeletado", { email });
});

router.put("/:uid", validationUser, async (req, res) => {
  try {
    console.log("to no PUT");
    const user = req.body;
    const { uid } = req.params;
    console.log(uid);
    const newUser = await userService.updateUser(user, uid);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
