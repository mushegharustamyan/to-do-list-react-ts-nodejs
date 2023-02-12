const { User } = require("../db/sequelize")
const { hashPWD } = require("../helpers/hashPWD")

exports.signup = (req, res) => {
    const {firstname , lastname , email , password} = req.body

    const hashedPassword = hashPWD(password)

    User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword
    })
    .then((_) => res.status(201).send("User registered"))
    .catch((_) => res.status(500).send("Internal server error"))
}