'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    file: DataTypes.TEXT,
    title: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.TEXT,
    colour: DataTypes.JSON,
    capacity: DataTypes.JSON,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};