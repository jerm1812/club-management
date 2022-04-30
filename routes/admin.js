var express = require('express');
var router = express.Router();

var club = {'name': 'test'}

router.get('/club', function(req, res, next) {
  console.log(req)
  res.send(club);
});

module.exports = router;