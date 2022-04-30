const express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../'));
});

router.get('/stylesheet', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../login.html'));
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../register.html'));
});

router.get('/admin', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../admin.html'));
});

router.get('/groups', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../groups.html'));
});

module.exports = router;
