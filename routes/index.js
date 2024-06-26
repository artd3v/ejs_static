var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/service', function(req, res, next) {
  res.render('service', {page:'Service', menuId:'service'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contacts', menuId:'contact'});
});

router.get('/registration', function(req, res, next) {
  res.render('registration', {page:'Registration', menuId:'registr'});
});
module.exports = router;