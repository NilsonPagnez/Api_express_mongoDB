const mongoose = require('mongoose')

async function startDB(){
    await mongoose.connect('mongodb+srv://Nilson2:rdODBz01SQoxSht4@cluster0.hfauezc.mongodb.net/test')
    
}

module.exports = startDB