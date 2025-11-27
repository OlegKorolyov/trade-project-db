module.exports = app => {
    const goods = require("../controllers/goods.controller.js");
    
    var express = require("express")
    var router = express.Router();
  
    // Create a new goods
    router.post("/", goods.create);
  
    // Retrieve all goods
    router.get("/", goods.findAll);
  
    // Retrieve a single goods with id
    router.get("/:id", goods.findOne);
  
    // Update a goods with id
    router.put("/:id", goods.update);
  
    // Delete a goods with id
    router.delete("/:id", goods.delete);
  
    // Create a new goods
    router.delete("/", goods.deleteAll);

    //get goodsgroup name
    router.get("/:id/goodsgroupname", goods.getGoodsGroupName);
  
    app.use('/api/goods', router);
  };