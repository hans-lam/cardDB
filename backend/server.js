const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 

require('dotenv').config({ path: '.env' }); 

const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json());  

const uri = process.env.ATLAS_URI; 
mongoose.connect(uri); 
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

const yugiohRouter = require('./routes/yugioh'); 
const vanguardRouter = require('./routes/vanguard'); 

app.use('/yugioh', yugiohRouter); 
app.use('/vanguard', vanguardRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});