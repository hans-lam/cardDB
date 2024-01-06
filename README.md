# Card Database
This is a MERN stack project to help me manage my inventory of all the various trading cards I own. 

## Getting Started
To launch this application, please follow the following steps: 
1. Clone the Github repo.
2. Ensure that you have NODE.js installed.
3. Open the repo in your preferred IDE.
4. In the backend folder, create a ".env" file.
5. In the ".env" file, copy and paste the following:
```
ATLAS_URI="mongodb+srv://basicUser:JAm8DGxuACtTFiYl@cardcluster.li3tom3.mongodb.net/?retryWrites=true&w=majority"
```
6. Save the changes made to the ".env" file.
7. Open a new terminal instance and navigate to the backend folder.
8. Run the command ``` npm install ```. This will install all the backend dependencies.
9. Once the backend dependencies have been installed, run the command ``` node server.js ```. If the server is successfully running, you should see the following messages in the terminal:
<br> ![image](https://github.com/hans-lam/cardDB/assets/56192479/daec8d8b-349f-4f7b-8004-a57b4b30cd09)
10. Open a new terminal instance and navigate to the mern-card-tracker folder.
11. Again run the command ``` npm install ```. This will now install all the frontend dependencies.
12. Once the frontend dependencies have been installed, run the command ``` npm start ```. If the frontend compiles succssfully, you should see the following messages in the terminal:
<br> ![image](https://github.com/hans-lam/cardDB/assets/56192479/edb253bd-f4e2-4632-b964-d6aba4517494)
13. The frontend should now be running in your browser at ``` http://localhost:3000/ ``` and should look like this:
<br> ![image](https://github.com/hans-lam/cardDB/assets/56192479/b904e07e-6ed2-4b67-99f8-818d01385434)

## Models
There are currently two models created for the two types of trading cards I own. The models were created using mongoose.
### Yugioh Model 
This model contains the following fields in the schema: 
- cardName, string representing the name of the card
- cardType, string that must be part of the cardType enum representing the type of the card
- cardSubType, string array representing the different sub-types the card belongs to (eg. ["Effect", "Synchro"])
- cardOrigin, string representing what set the card was obtained from
- numberOwned, number representing the number of copies of the card that I own
- tcgPlayerLink (optional), string representing the link to the biggest trading card market place's listing online

### Vanguard Model 
This model contains two fields in the schema: one for card name and one for card grade. 
