const { Router } = require("express")
const authRouter = Router()
const controller = require("../controllers/authController")

authRouter.post("/login", controller.login)
authRouter.get("/refresh_token", controller.refreshController)

module.exports = authRouter