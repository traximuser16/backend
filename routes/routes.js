const { Router } = require("express");
const userRouter = Router();
const controller = require("../controllers/Userscontrollers");
const authenticate = require("../middleware/authorization");

userRouter.get("/", controller.usersController);
userRouter.post("/", controller.createController);

module.exports = userRouter