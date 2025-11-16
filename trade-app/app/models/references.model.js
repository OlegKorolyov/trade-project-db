
module.exports = (db) => {
    
    //GoodsGroup references
    db.goodsGroup.belongsTo(db.goodsGroup, { foreignKey: 'baseGoodsGroup' }); 

    //Goods references
    db.goods.belongsTo(db.goodsGroup, { foreignKey: 'goodsGroup' }); 

    //pricelistgoods
    db.pricelistGoods.belongsTo(db.pricelist, { foreignKey: 'priceList' }); 
    db.pricelistGoods.belongsTo(db.goods, { foreignKey: 'goods' }); 

  
};