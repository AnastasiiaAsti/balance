require('dotenv').config();

require('./config/database');

const Asana = require('./models/asana')

const data = require('./data')

const p1 = Asana.deleteMany({})
Promise.all([p1])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Asana.create(data.asanas)
    ])
})
.then(process.exit)