const { Router } = require("express");
const userRouter = Router();
const userValidation = require('../middlewares/userValidation.middleware')
const auth = require('../middlewares/auth.middleware')
const userController = require('../controllers/users.controllers')



userRouter.get("/", userController.getAllUsers);

userRouter.post("/", auth, userValidation, userController.createUser);

module.exports = userRouter;
