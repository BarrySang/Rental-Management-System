const Sequelize = require('sequelize');

module.exports = new Sequelize('rental_management_system', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});