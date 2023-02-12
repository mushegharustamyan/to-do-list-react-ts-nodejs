const bcrypt = require("bcrypt")

exports.hashPWD = (password) => {
    return bcrypt.hashSync(password , 8)
}