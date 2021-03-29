//Dependencies
const House = require('../models/House');

//Function to update a house
function updateHouse(id, body, res) {
    House.findByPk(id)
    .then(house => {
        if(!house) {
            res.status(400).json({message: `no house with the id ${id}`});
        }

        House.update({...body}, {
            where: {
                number: id
            }
        });

        res.status(200).json({message: 'house updated succesfully'});
    })
    .catch(err => {
        //res.status(500).send('internal server error');
        console.log(err);
    });
}

module.exports = updateHouse;