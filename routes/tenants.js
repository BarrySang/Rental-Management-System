// Get the dependancies
const express = require('express');
const updateHouse = require('../functions/updateHouse');
const router = express.Router();
const Tenant = require('../models/Tenant');

//Add tenant
router.post('/add', (req, res) => {
    let {id, first_name, last_name, other_names, house_number} = req.body;

    if(!id || !first_name || !last_name || !other_names|| !house_number) {
        res.status(400).json({message: 'All fields must be filled'});
    }

    Tenant.create({
        id,
        first_name,
        last_name,
        other_names,
        house_number
    })
    .then(tenant => {
        body = {
            "status": "occupied",
            "availability": "unavailble"
        }
        updateHouse(house_number, body, res);
        res.status(200).json({message: 'Tennt aadded succesfully'});
    })
    .catch(err  => {
        res.status(500).json({message: 'internal server error'});
        console.log(err);
    });
});

module.exports = router;