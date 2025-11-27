
module.exports = (db) => {
    
    //GoodsGroup references
    db.goodsGroup.belongsTo(db.goodsGroup, { foreignKey: 'baseGoodsGroup' }); 

    //Goods references
    db.goods.belongsTo(db.goodsGroup, { foreignKey: 'goods_group' }); 

    //pricelistgoods
    db.pricelistGoods.belongsTo(db.pricelist, { foreignKey: 'priceList' }); 
    db.pricelistGoods.belongsTo(db.goods, { foreignKey: 'goods' }); 

    //purchase
    db.purchase.belongsTo(db.pricelist, { foreignKey: 'priceList' }); 

    //purchasegoods
    db.purchaseGoods.belongsTo(db.purchase, { foreignKey: 'purchaseId' }); 
    db.purchaseGoods.belongsTo(db.goods, { foreignKey: 'goods' }); 

};