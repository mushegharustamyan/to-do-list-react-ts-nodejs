const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, 'root', 'root', {
  port: 3306,
  dialect: 'mysql',
});

module.exports = { sequelize }