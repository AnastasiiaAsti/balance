const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

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
        enum: ['forwardbend', 'backbend', 'twist']
    },
    description: {
        type: String
    },
    comments: [commentSchema]
}, {
    timestamps: true    
    })


module.exports = mongoose.model('Asana', asanaSchema)