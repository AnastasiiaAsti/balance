const Asana = require('../models/asana')

module.exports = {
    index,
    show
};

function index(req, res) {
    console.log(req.user)
    Asana.find({}, function (err, asanas) {
        res.render('asanas/index', { title: 'All Asanas', asanas });
    });
}

function show(req, res) {
    Asana.findById(req.params.id, function(err, asana) {
        res.render('asanas/show', { title: 'Description', asana});
    })
}