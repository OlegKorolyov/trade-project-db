const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Goods = sequelize.define("goods", {
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      articul: {
        type: Sequelize.INTEGER
      },
      goodsGroup: {
        type: Sequelize.INTEGER
      }
    });

    
    return Goods;
  };