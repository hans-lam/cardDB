const router = require('express').Router(); 
let yugioh = require('../models/yugioh.model'); 
const helpers = require('./helpers');

router.route('/').get((req, res) => {
    yugioh.find() 
        .then(yugCards => res.json(yugCards)) 
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => { 
    const newCard = helpers.getYugiohJSON(req.body);

    newCard.save() 
        .then(() => res.json('Card added!')) 
        .catch(err => res.status(400).json('Error: ' + err));
});  

router.route('/:id').get((req, res) => {
    yugioh.findById(req.params.id) 
        .then(yugCard => res.json(yugCard))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route("/:id").delete((req, res) => {
    yugioh.findByIdAndDelete(req.params.id) 
        .then(() => res.json('Card deleted.')) 
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route("/update/:id").post((req, res) => {
    yugioh.findByIdAndUpdate(req.params.id) 
        .then(yugCard => {
            helpers.updateYugiohJSON(yugCard, req.body);

            yugCard.save() 
                .then(() => res.json('Card updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        }) 
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 