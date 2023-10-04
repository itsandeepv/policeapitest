const express = require('express');
const foundBagRouter = express.Router();
const FoundBagController = require('../Controlller/foundBag.controller');
const upload = require("../Middleware/imageUploader")

// Register a new user
foundBagRouter.post('/foundBag', upload.single('bag_Image'), FoundBagController.createFoundBag);
foundBagRouter.get('/foundBag', FoundBagController.getFoundAll);
foundBagRouter.get('/foundBag/:foundId', FoundBagController.getFoundById);

module.exports = foundBagRouter; 


