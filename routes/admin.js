var express = require('express');
const { path } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/club', function(req, res, next) {
  res.send('index.html', {
    root: path.join(__dirname, './')
  });
});

module.exports = router;