'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detailproduct: DataTypes.TEXT
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};