var express = require('express');
const req = require('express/lib/request');
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