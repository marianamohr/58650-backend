const express = require("express");
const userService = require("../service/users.service");
const userValidation = require("../middlewares/userValidation");

const router = express.Router();

router.post("/", userValidation, async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const userCreated = await userService.createUser({
      first_name,
      last_name,
      email,
      password,
    });
    console.log(userCreated);
    return res.render("userCreated", { name: userCreated.first_name });
  } catch (error) {
    if (error.code === 11000) {
      return res.render("error", {
        message: "Nao foi possivel criar com usuario com o email passado",
      });
    }
    return res.render("error");
  }
});

router.put("/:uid", userValidation, async (req, res) => {
  try {
    console.log("to no put");
    const { uid } = req.params;
    const user = req.body;
    console.log(uid, user);
    const userUpdated = await userService.updateUser(user, uid);
    res.status(201).json(userUpdated);
  } catch (error) {
    return res.render("error");
  }
});

router.delete("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userService.deleteUser(email);
    return res.render("userDeleted", { email });
  } catch (error) {
    return res.render("error");
  }
});

module.exports = router;
