const Asana = require('../models/asana');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Asana.findById(req.params.id, function(err, asana) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        //console.log(req.body)
        asana.comments.push(req.body)
        console.log(asana)
        asana.save(function (err) {
            console.log(err)
            res.redirect(`/asanas/${asana._id}`)
        })
    })
}

async function deleteComment(req, res, next) {
    try {
        const asana = await Asana.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id })
        if(!asana) return res.redirect('/asanas')
        asana.comments.remove(req.params.id)
        await asana.save()
        res.redirect(`/asanas/${asana._id}`)
    } catch(err) {
        return next(err)
    }
}