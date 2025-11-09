module.exports = (sequelize, Sequelize) => {
    const GoodsGroup = sequelize.define("goods_group", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      baseGoodsGroup: {
        type: Sequelize.INTEGER,
        references: "goods_group",
        referencesKey: "id"
      }
    });
  
    return GoodsGroup;
  };