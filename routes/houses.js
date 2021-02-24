// Get the dependancies
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const House = require('../models/House');

//Get all houses
router.get('/', (req, res) => House.findAll()
    .then(houses => {
        if (houses.length === 0) {
            res.status(200).json({message: 'no house found'});
        } else {
            res.send(houses);
            res.status(200);
        }
    })
    .catch(err => {
        res.status(500).json({message: "internal server error"});
        console.log(err);
    })
);

//Get one house
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    
    House.findByPk(id)
    .then(house => {
        if (!house) {
            res.status(400).json({message: `no house with the id ${id}`});
        } else {
            res.status(200).send(house);
        }
    })
    .catch(err => console.log(err));
});

//Add a house
router.post('/add', (req, res) => {
    let {number, floor, price, status, availability} = req.body;
    if (!number || !floor || !price || !status || !availability) {
        res.status(400).json({message: 'all fields are required'});
    } else {
        House.create({
            number,
            floor,
            price,
            status,
            availability
        })
        .then(house => {
            //res.send(house);
            res.status(200).json({message: 'house added succesfully'});
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
            console.log(err)
        });    
    }
});

//Update an existing house
router.put('/:id', (req, res) => {
    let id = parseInt(req.params.id);

    House.findByPk(id)
    .then(house => {
        if(!house) {
            res.status(400).json({message: `no house with the id ${id}`})    ;
        }

        House.update({...req.body}, {
            where: {
                number: id
            }
        });

        res.status(200).json({message: 'house updated succesfully'});
    })
    .catch(err => {
        res.status(500).send('internal server error');
    });
});

//Delete a house
router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    House.findByPk(id)
    .then(house => {
        if(!house) {
            res.status(400).json({message: `no house with the id ${id}`});    
        }

        House.destroy({
            where: {
                number: id
            }
        });
        res.status(200).send(`house number ${id} deleted succesfuly`);
        
    }).catch(err => {
        res.status(500).send(`internl server error`);
    });
});

module.exports = router;