const express = require('express');

const router = require("express").Router();

const {getAllItems, getItem, postItem, updateItem, deleteItem, } = require("../controllers/itemController");

 //GET USERS
 router.route("/").get(getAllItems)

 // GET USER

 router.route("/:id").get(getItem)

 // POST 
 router.route("/").post(postItem)

//UPDATE

 router.route("/:id").put(updateItem)
 
//DELETE
router.route("/:id").delete(deleteItem) 





module.exports = router;
