var express = require("express");
var router = express.Router();
var models = require("../api/models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  models.products.findAll({}).then(function (products) {
    res.json(products);
  });
});

/* GET by id. */
router.get("/:id", function (req, res, next) {
  models.products.findByPk(req.params.id)
  .then(function (products) {
    res.json(products);
  });
});

/* POST home page. */
router.post("/", function (req, res) {
  models.products
    .create({
      image: req.body.image,
      title: req.body.title,
      brand: req.body.brand,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      stock: req.body.stock
    })
    .then(function (products) {
      res.json(products);
    });
});

router.delete("/:id", function (req, res, next) {
  models.products.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (products) {
    res.json(products);
  });
});

module.exports = router;
