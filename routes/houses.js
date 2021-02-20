// Get the dependancies
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const House = require('../models/House');

router.get('/', (req, res) => House.findAll()
    .then(houses => {
        console.log(houses);
        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);
    })
);

router.post('/add', (req, res) => {
    let {number, floor, price, status, availability} = req.body;

    House.create({
        number,
        floor,
        price,
        status,
        availability
    })
    .then(house => {
        console.log(house)
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
})

module.exports = router;