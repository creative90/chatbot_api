const Items = require('../models/itemModels');
const asyncHandler = require('express-async-handler')


//GET ITEMS
const getAllItems = asyncHandler( async (req, res, next) => {
  const items = await Items.find();
  res.status(200).json({
    status: 'success',
    message: 'items list compiled',
    data: {
      items,
    },
  });
});

// GET ITEM WITH ID

const getItem = asyncHandler(async(req, res) => {
  const id = req.params.id
  Items.findById(id)
      .then(item => {
          res.status(200).send(item)
      }).catch(err => {
          console.log(err)
          res.status(404).send(err)
      })
})

// POST
   const postItem = asyncHandler(async(req, res) => {
  const item = req.body
  item.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
  Items.create(item)
      .then(item => {
          res.status(201).send(item)
      }).catch(err => {
          console.log(err)
          res.status(500).send(err)
      })
})
//UPDATE
const updateItem = asyncHandler(async (req, res) => {
    const id = req.params.id
    const item = req.body
    item.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    Items.findByIdAndUpdate(id, item, { new: true })
        .then(newItem => {
            res.status(200).send(newItem)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})

//DELETE
const deleteItem = asyncHandler (async(req, res) => {
    const id = req.params.id
    Items.findByIdAndRemove(id)
        .then(item => {
            res.status(200).send(item)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})


module.exports = {getAllItems, getItem, postItem, updateItem, deleteItem, };