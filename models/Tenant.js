const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/database');

const Tenant = db.define('tenant', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    other_names: {
        type: Sequelize.STRING
    },
    house_number: {
        type: Sequelize.STRING
    }
});

module.exports = Tenant;