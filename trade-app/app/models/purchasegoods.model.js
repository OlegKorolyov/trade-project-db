import { DataTypes } from '@sequelize/core';

module.exports = (sequelize, Sequelize) => {
    const PurchaseGoods = sequelize.define("purchasegoods", {
      amount: {
        type: DataTypes.DOUBLE
      },
      purchase: {
        type: DataTypes.INTEGER
      },
      goods: {
        type: Sequelize.INTEGER
      }
    });


    PurchaseGoods.belongsTo(Purchase, { foreignKey: 'purchase' }); 
    PurchaseGoods.belongsTo(Goods, { foreignKey: 'goods' }); 

  
    return Purchase;
  };