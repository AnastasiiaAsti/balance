const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const routineSchema = new Schema({
    name: {
        enum: ['Morning', 'Evening', 'Detox']
    },
    backbend: [{
        type: Schema.Types.ObjectId,
        ref: 'Asana',
    }],
    forwardbend: [{
        type: Schema.Types.ObjectId,
        ref: 'Asana'
    }],
    twist: [{
        type: Schema.Types.ObjectId,
        ref: 'Asana'
    }],
})

module.exports = mongoose.model('Routine', routineSchema);