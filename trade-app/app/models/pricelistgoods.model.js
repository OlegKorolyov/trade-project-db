import { DataTypes } from '@sequelize/core';

module.exports = (sequelize, Sequelize) => {
    const PricelistGoods = sequelize.define("pricelistgoods", {
      price: {
        type: DataTypes.DOUBLE
      },
      pricelist: {
        type: Sequelize.INTEGER
      },
      goods: {
        type: Sequelize.INTEGER
      }
    });

    PricelistGoods.belongsTo(Pricelist, { foreignKey: 'pricelist' }); 
    PricelistGoods.belongsTo(Goods, { foreignKey: 'goods' }); 

  
    return PricelistGoods;
  };