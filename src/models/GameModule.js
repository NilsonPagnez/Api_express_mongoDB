const mongoose = require('mongoose')

const Schema = mongoose.Schema
const GameSchema = new Schema({
    name: String,
    gender: String,
    multiplayer: Boolean
})

const GameModel = mongoose.model('games', GameSchema)

module.exports = GameModel