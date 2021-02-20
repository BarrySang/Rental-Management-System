const Sequelize = require('sequelize');
const db = require('../config/database');

const House = db.define('house', {
    number: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    floor: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.STRING
    },
    availability: {
        type: Sequelize.STRING
    }
});

module.exports = House;