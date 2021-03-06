const mongoose = require('mongoose')
const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./comandos/config.json')

mongoose.connect(config.db , {
    useNewUrlParser: true
}, (err) => {
    if (err) return console.log(`Erro ao conectar no database!\n${err}`)
    console.log(`Conectado ao BANCO DE DADOS!`)
})
var Schema = mongoose.Schema

var reps = new Schema({
    _id: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        default: 0
    }
})

var repper = new Schema({
    _id: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

var users = new Schema({
    _id: {type: String, required: true},
    user: {type: String},
    level: { type: Number, default: 1 }, // Rank of User
    xp: { type: Number, default: 0},
    portfolio: {type: String, default: "-/-"},
})


var Users = mongoose.model("Users", users)
var Reps = mongoose.model("Reps", reps)
var Reppers = mongoose.model("Reppers", repper)
exports.Reps = Reps
exports.Reppers = Reppers
exports.Users = Users