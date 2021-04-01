var Meme = require('../models/meme');

module.exports = {
index,
deleteMeme,
create,



};

function index(req, res) {
    var memes = Meme.getAll();
    res.render('index', {title: 'memes', memes});
};


function deleteMeme(req, res) {
    Meme.deleteOne(req.params.id);
    res.redirect('/');
}

function create(req, res) {
    Meme.create(req.body.meme);
    res.redirect('/');
}
