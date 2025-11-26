const db = require("../models");
const GoodsGroup = db.goodsGroup;
const Op = db.Sequelize.Op;

// Create and Save a new GoodsGroup
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a GoodsGroup
    const goodsGroup = {
      name: req.body.title,
      description: req.body.description,
      baseGoodsGroup: req.body.baseGoodsGroup
    };
  
    // Save GoodsGroup in the database
    GoodsGroup.create(goodsGroup)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the GoodsGroup."
        });
      });
  };

// Retrieve all GoodsGroup from the database.
exports.findAll = (req, res) => {
  res.json({ message: 'GET api/goodsgroups'});
};

// Find a single GoodsGroup with an id
exports.findOne = (req, res) => {
  
};

// Update a GoodsGroup by the id in the request
exports.update = (req, res) => {
  
};

// Delete a GoodsGroup with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all GoodsGroup from the database.
exports.deleteAll = (req, res) => {
  
};
