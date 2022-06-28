const Asana = require('../models/asana');
const Routine = require('../models/routine');

module.exports = {
    new: newRoutine,
    create
}

function create(req, res) {
    Routine.create(req.body, function (err, routine) {
        res.redirect('/routines/new');
});
}

function newRoutine(req, res) {
    Routine.find({}, function (err, routines) {
        res.render('routines/new', { title: 'Add Routine', routines });
    })
}