var express = require('express');
var router = express.Router();
var memesCtrl = require('../controllers/memes');


/* GET home page. */
router.get('/', memesCtrl.index);
router.delete('/:id', memesCtrl.deleteMeme);
router.post('/', memesCtrl.create);

module.exports = router;
