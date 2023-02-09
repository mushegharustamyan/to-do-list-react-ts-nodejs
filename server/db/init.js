const sequelize = require("sequelize")
const mysql = require("mysql2")

const connect = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            port: 3306
        })

        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err, results) => {
            if (err) reject(err)
            
            resolve(results)
        })
    })
}

module.exports = connect