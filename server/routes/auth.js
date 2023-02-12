const express = require("express")

const router = express()

const authController = require("../controllers/auth")
const { verifySignup } = require("../middlewares/auth")

router.post("/signup" ,verifySignup ,authController.signup)

module.exports = router