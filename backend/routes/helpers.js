const yugioh = require("../models/yugioh.model");

function getYugiohJSON (reqBody) {
    const cardName = reqBody.cardName; 
    const cardType = reqBody.cardType; 
    const cardSubType = reqBody.cardSubType; 
    const cardOrigin = reqBody.cardOrigin; 
    const numberOwned = reqBody.numberOwned; 
    const tcgPlayerLink = reqBody.tcgPlayerLink; 

    const newCard = new yugioh({cardName, cardType, cardSubType, cardOrigin, numberOwned, tcgPlayerLink}); 

    return newCard;
}  

function updateYugiohJSON (yugCard, reqBody) {
    yugCard.cardName = reqBody.cardName; 
    yugCard.cardType = reqBody.cardType;
    yugCard.cardSubType = reqBody.cardSubType; 
    yugCard.cardOrigin = reqBody.cardOrigin;  
    yugCard.numberOwned = reqBody.numberOwned; 
    yugCard.tcgPlayerLink = reqBody.tcgPlayerLink;  
}

module.exports = {getYugiohJSON, updateYugiohJSON};