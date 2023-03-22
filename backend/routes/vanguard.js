const router = require('express').Router(); 
let vanguard = require('../models/vanguard.model'); 

router.route('/').get((req, res) => {
    vanguard.find() 
        .then(vanCards => res.json(vanCards)) 
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => { 
    const cardName = req.body.cardName; 
    const cardGrade = req.body.cardGrade;
    const newCard = new vanguard({cardName, cardGrade}); 

    newCard.save() 
        .then(() => res.json('Card added!')) 
        .catch(err => res.status(400).json('Error: ' + err));
});  

module.exports = router; 