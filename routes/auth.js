var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
    // just accept whatever is passed in
    res.send('SEND BACK DATA');
});

router.post('/register', function(req, res, next) {
    res.send('SEND BACK DATA');
});

module.exports = router;