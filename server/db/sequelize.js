const { Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, 'root', 'root', {
  port: 3306,
  dialect: 'mysql',
});

const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Todo.belongsTo(User, {foreignKey: "userId"})

module.exports = { sequelize, User, Todo }