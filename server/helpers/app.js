const { pong } = require("../controllers/app")

const configureRouter = (app) => {
    app.use('/' , pong)
}

module.exports = configureRouter