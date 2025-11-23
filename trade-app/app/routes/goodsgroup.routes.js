module.exports = app => {
    const goodsgoup = require("../controllers/goodsgroup.controller.js");
  
    var router = require("express").Router();
  
    // Create a new GoodsGroup
    router.post("/", goodsgoup.create);
  
    // Retrieve all GoodsGroup
    router.get("/", goodsgoup.findAll);
  
    // Retrieve a single GoodsGroup with id
    router.get("/:id", goodsgoup.findOne);
  
    // Update a GoodsGroup with id
    router.put("/:id", goodsgoup.update);
  
    // Delete a GoodsGroup with id
    router.delete("/:id", goodsgoup.delete);
  
    // Create a new GoodsGroup
    router.delete("/", goodsgoup.deleteAll);
  
    app.use('/api/goodsgoups', router);
  };

