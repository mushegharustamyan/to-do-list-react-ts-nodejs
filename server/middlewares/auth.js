const { User } = require("../db/sequelize")

exports.verifySignup = (req , res , next) => {
    console.log(req.body)

    const {firstname , lastname , email , password} = req.body

    if(!firstname || !lastname || !email || !password) return res.status(400).send("Missing require fields")

    User.findOne({
        where: {
            email
        }
    }).then((user) => {
        if(user) return res.status(409).send("Email is already in use")
        next()
    })
}