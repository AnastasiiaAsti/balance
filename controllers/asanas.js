const Asana = require('../models/asana')

module.exports = {
    index
};

function index(req, res) {
    console.log(req.user)
    Asana.find({}, function (err, asanas) {
        res.render('asanas/index', { title: 'All Asanas', asanas });
    });
}