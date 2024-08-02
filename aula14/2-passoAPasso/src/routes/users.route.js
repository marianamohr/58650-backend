const express = require("express");
const userModel = require("../models/users.model");
const validateUser = require("../middlewares/validateUser.middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    console.log(typeof limit);
    const users = await userModel.find().limit(limit);
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userModel.find({ email: email });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.post("/", validateUser, async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;

    const user = await userModel.create({ first_name, last_name, email });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.put("/:useremail", validateUser, async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;

    const { useremail } = req.params;
    const user = await userModel.updateOne(
      { email: useremail },
      { first_name, last_name, email }
    );
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.delete("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);
    const user = await userModel.deleteOne({ email: email });
    if (user.deletedCount !== 0) {
      return res.status(204).send();
    }
    return res.status(404).json({ message: "Impossivel deletar esse email" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

module.exports = router;
