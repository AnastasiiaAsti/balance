const mongoose = require('mongoose')

const Schema = mongoose.Schema

const asanaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    originName: {
        type: String
    },
    typeOfAsana: {
        type: String,
        emun: ['forward fold', 'backbend', 'twist']
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model('Asana', asanaSchema)