## cardDB
This is a MERN stack project to help me manage my inventory of all the various trading cards I own. 

## Models
There are currently two models created for the two types of trading cards I own. The models were created using mongoose.
### Yugioh Model 
This model contains the following fields in the schema: 
- cardName, string representing the name of the card
- cardType, string that must be part of the cardType enum representing the type of the card
- cardSubType, string array representing the different sub-types the card belongs to (eg. ["Effect", "Synchro"])
- cardOrigin, string representing what set the card was obtained from
- numberOwned, number representing the number of copies of the card that I own
- tcgPlayerLink, string representing the link to the biggest trading card market place's listing online
### Vanguard Model 
This model contains two fields in the schema: one for card name and one for card grade. 
