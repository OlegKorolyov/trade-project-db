module.exports = app => {
    const goodsgroup = require("../controllers/goodsgroup.controller.js");
    
    var express = require("express")
    var router = express.Router();
  
    // Create a new GoodsGroup
    router.post("/", goodsgroup.create);
  
    // Retrieve all GoodsGroup
    router.get("/", goodsgroup.findAll);
  
    // Retrieve a single GoodsGroup with id
    router.get("/:id", goodsgroup.findOne);
  
    // Update a GoodsGroup with id
    router.put("/:id", goodsgroup.update);
  
    // Delete a GoodsGroup with id
    router.delete("/:id", goodsgroup.delete);
  
    // Create a new GoodsGroup
    router.delete("/", goodsgroup.deleteAll);
  
    app.use('/api/goodsgroups', router);
    console.log('router for /api/goodsgroups initialized')
  };

