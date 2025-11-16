const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Purchase = sequelize.define("purchase", {
      purchaseDate: {
        type: DataTypes.DATE
      },
      invoiceDate: {
        type: DataTypes.DATE
      },
      pricelist: {
        type: Sequelize.INTEGER
      }
    });


    Purchase.belongsTo(Pricelist, { foreignKey: 'pricelist' }); 

  
    return Purchase;
  };
