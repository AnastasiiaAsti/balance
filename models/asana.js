const mongoose = require('mongoose')

const Schema = mongoose.Schema

const asanaSchema = new Schema({
    photosURLs: [
        {
            type: String,
            validate: {
                validator: function (value) {
                    const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                    const urlRegExp = new RegExp(urlPattern);
                    return value.match(urlRegExp);
            },
                message: props => `${props.value} is not a valid URL`
            }
        }
    ],
    name: {
        type: String,
        required: true
    },
    originName: {
        type: String
    },
    typeOfAsana: {
        type: String,
        emun: ['forwardbend', 'backbend', 'twist']
    },
    description: {
        type: String
    },
})


const routineSchema = new Schema({
    name: {
        enum: ['Morning Routine', 'Evening Routine', 'Detox Routine']
    },
    backbends: [{
        type: Schema.Types.ObjectId,
        ref: 'Asana',
    }],
    forwardbend: [{
        type: Schema.Types.ObjectId,
        ref: 'Asana'
    }],
    twists: [{
        type: Schema.Types.ObjectId,
        ref: 'Asana'
    }],
})

module.exports = mongoose.model('Asana', asanaSchema)