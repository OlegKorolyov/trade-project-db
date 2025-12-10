module.exports = app => {
    const goods = require("../controllers/goods.controller.js");
    
    var express = require("express")
    var router = express.Router();

    /**
    * @swagger
    * components:
    *   schemas:
    *     Goods:
    *       type: object
    *       properties:
     *        id:
     *          type: integer
     *          example: 1
     *        code:
     *          type: string
     *          example: goods1
     *        name:
     *          type: string
     *          example: goods1
     *        description:
     *          type: string
     *          example: Goods 1.1 description
     *        articul:
     *          type: integer
     *          example: 12345
     *        goodsGroup:
     *          type: integer
     *          example: 1
    */
  

    /**
     * @swagger
     * /api/goods:
     *   post:
     *     summary: Create now Goods
     *     requestBody:
     *       required: true
     *       content: 
     *         application/json:
     *           schema: 
     *             $ref: '#/components/schemas/Goods'
     *     responses:
     *       201:
     *         description: Goods created
     * 
     */
    // Create a new goods
    router.post("/", goods.create);
  
    // Retrieve all goods
    /**
     * @swagger
     * /api/goods:
     *   get:
     *     summary: Retrieve a list of goods
     *     responses:
     *       200:
     *         description: A list of goods
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: 
     *                 $ref: '#/components/schemas/Goods'
     *                   
     */
    router.get("/", goods.findAll);


    /**
     * * @swagger
     * /api/goods:
     *   get:
     *     summary: Retrieve a paged list of goods
     *     parameters:
     *       - in: query
     *         name: page
     *         required: false
     *         schema:
     *           type: integer
     *           format: int64
     *         description: page number
     *       - in: query
     *         name: size
     *         required: false
     *         schema:
     *           type: integer
     *           format: int64
     *         description: page size
     *     responses:
     *       200:
     *         description: A list of goods
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: 
     *                 $ref: '#/components/schemas/Goods'
     */
    router.get("/paged", goods.findAllPaged);
  

    /**
     * @swagger
     * /api/goods/{id}:
     *   get:
     *     summary: Retrieve a list of goods
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *           format: int64
     *         description: The Goods ID
     *     responses:
     *       200:
     *         description: A list of goods
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Goods'
     *                   
     */
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

    //get goodsgroup
    router.get("/:id/goodsgroup", goods.getGoodsGroup);
  
    app.use('/api/goods', router);
  };