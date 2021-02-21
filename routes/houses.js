// Get the dependancies
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const House = require('../models/House');

//Get all houses
router.get('/', (req, res) => House.findAll()
    .then(houses => {
        res.send(houses);
        res.status(200);
    })
    .catch(err => {
        console.log(err);
    })
);

//Get one house
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    House.findByPk(id)
    .then(house => {
        res.send(house);
        res.status(200);
    })
    .catch(err => console.log(err));
});

//Add a house
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
        res.send(house)
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
});

//Update an existing house
router.put('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let house = House.findByPk(id);

    House.update({...req.body}, {
        where: {
            number: id
        }
    });
    
    res.send(house);
    res.status(200);
});

//Delete a house
router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let house = House.findByPk(id);
    
    House.destroy({
        where: {
            number: id
        }
    });
    
    res.send(`house number ${id} deleted succesfuly`);
    res.status(200);
});

module.exports = router;