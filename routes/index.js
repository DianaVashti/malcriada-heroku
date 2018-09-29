var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('18plus.jade', { title: 'whatever' });
});

router.get('/authorized', function(req, res, next) {
  res.render('index', { title: 'Malcriada' });
});

module.exports = router;
