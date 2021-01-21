var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    link = '/'
    res.render('index', { home: link });
});

router.get('/each', function(req, res, next) {

    const names = req.query.name
    link = '/each'

    res.render('inner-page', { name: names, home: link });
});

module.exports = router;