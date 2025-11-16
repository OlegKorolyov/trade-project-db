const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Pricelist = sequelize.define("procelist", {
      category: {
        type: Sequelize.STRING
      },
      date: {
        type: DataTypes.DATE
      }
    });


    return Pricelist;
  };