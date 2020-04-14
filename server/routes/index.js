var express = require('express');
var router = express.Router();
var models = require('../api/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.products.findAll({}).then(function(todos) {
    res.json(todos);
  });
  console.log(models.products)
});

router.post('/add', function(req, res) {
  models.products.create({
    title: req.body.title,
    rate: req.body.rate,
    description: req.body.description,
    price: req.body.price,
    brand: req.body.brand,
    detailproduct: req.body.detailproduct
  })
  .then(function(products) {
    res.json(products);
  });
});

module.exports = router;
