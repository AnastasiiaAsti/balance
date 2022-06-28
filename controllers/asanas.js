const Asana = require('../models/asana')

module.exports = {
    index,
    show,
    new: newAsana,
    create
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

function newAsana(req, res) {
    res.render('asanas/new');
}

function create(req, res) {
    const asana = new Asana(req.body);
    asana.save(function (err) {
        //respond to the request, in this case redirect
        if (err) {
            console.log(err)
            return res.redirect('/asanas')
        }
        res.redirect('/asanas');
    })
}