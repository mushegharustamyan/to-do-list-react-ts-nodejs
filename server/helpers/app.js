const authRouter = require("../routes/auth")

const configureRouter = (app) => {
    app.use('/auth' , authRouter)
}

module.exports = configureRouter