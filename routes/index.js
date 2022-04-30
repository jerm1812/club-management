const express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages/index.html'));
});

router.get('/stylesheet', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages/login.html'));
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages/register.html'));
});

router.get('/admin', function(req, res, next) {
  console.log(path.join(__dirname, '../public/pages/admin.html'));
  res.sendFile(path.join(__dirname, '../public/pages/admin.html'));
});

router.get('/groups', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages/groups.html'));
});

module.exports = router;
