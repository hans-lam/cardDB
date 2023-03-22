const mongoose = require('mongoose');  

const Schema = mongoose.Schema;  

const vanguardSchema = new Schema({
    cardName: {
        type: String, 
        required: true, 
        unique: false, 
        trim: true, 
        minlength: 1
    }, 
    cardGrade: {
        type: Number, 
        required: true
    },
}, {
    timestamps: true,
}); 

const vanguard = mongoose.model('vanguard', vanguardSchema); 
module.exports = vanguard;