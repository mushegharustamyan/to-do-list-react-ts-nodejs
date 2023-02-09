require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connect = require("./db/init")
const { sequelize } = require("./db/sequelize")
const configureRouter = require("./helpers/app")

const port = 4000

const app = express()

configureRouter(app)

app.use(express.json())
app.use(cors({ origin: "*" }))

app.listen(port, () => {
    console.log(`listening ${port}`)

    connect().then(() => sequelize.sync({force: true})).catch((e) => console.log(e))
})