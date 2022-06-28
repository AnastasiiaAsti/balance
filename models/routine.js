const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

module.exports = mongoose.model('Performer', performerSchema);