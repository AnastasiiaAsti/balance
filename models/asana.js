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


module.exports = mongoose.model('Asana', asanaSchema)