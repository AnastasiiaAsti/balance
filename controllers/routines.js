const Asana = require('../models/asana');
const Routine = require('../models/routine');

module.exports = {
    create,
    new: newRoutine
}

function create(req, res) {
    Routine.create(req.body, function (err, routine) {
        res.redirect('/routines/new');
});
}

async function newRoutine(req, res) {
        const forwardbends = await Asana.find({typeOfAsana: 'forwardbend'})
        const backbends = await Asana.find({typeOfAsana: 'backbend'})
        const twists = await Asana.find({typeOfAsana: 'twist'})
        res.render('routines/new', { title: 'Add Routine', forwardbends, backbends, twists })
}
