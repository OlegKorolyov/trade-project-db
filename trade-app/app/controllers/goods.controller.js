const db = require("../models");
const Goods = db.goods;
const GoodsGroup = db.goodsGroup;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
const util = require('util')

// Create and Save a new Goods
exports.create = (req, res) => {
    console.log('goods.create() ' + req.body);
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    if (!req.body.code) {
        res.status(400).send({
          message: "Code can not be empty!"
        });
        return;
      }
  
    // Create a Goods
    const goods = {
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      articul: req.body.articul,
      goodsGroup: req.body.goodsGroup
    };
  
    // Save Goods in the database
    Goods.create(goods)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Goods."
        });
      });
  };

// Retrieve all Goods from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Goods.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Goods."
      });
    });
};

// Find a single Goods with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Goods.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Goods with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Goods with id=" + id
      });
    });
};

// Update a Goods by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Goods.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Goods was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Goods with id=${id}. Maybe Goods was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Goods with id=" + id
      });
    });
};

// Delete a Goods with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Goods.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Goods was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Goods with id=${id}. Maybe Goods was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Goods with id=" + id
      });
    });
};

// Delete all Goods from the database.
exports.deleteAll = (req, res) => {
  Goods.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Goods were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Goods."
      });
    });

    
};

//Get goods group  name for current goods
exports.getGoodsGroupName = (req, res) => {
    const id = req.params.id;

    db.sequelize.query(`SELECT gg.name FROM goodsgroups gg LEFT JOIN goods g ON gg.id = g.goods_group WHERE g.id = ${id}`, {
        type: QueryTypes.SELECT,
    })
    .then(result => {
        res.send({name: `${result[0].name ? result[0].name : 'NO_NAME_ERROR'}`});
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while getting goodsgroup name."
          });
    });
};

//Get goods group  name for current goods
exports.getGoodsGroup = (req, res) => {
    const id = req.params.id;

    db.sequelize.query(`SELECT gg FROM goodsgroups gg LEFT JOIN goods g ON gg.id = g.goods_group WHERE g.id = ${id}`, {
        model: GoodsGroup,
        mapToModel: true,
        type: QueryTypes.SELECT,
    })
    .then(result => {
        console.log(JSON.stringify(result[0]))
        res.send(result[0]);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while getting goodsgroup."
          });
    });
};
