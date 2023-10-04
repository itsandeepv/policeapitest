const express = require('express');
const FoundHumanRouter = express.Router();
const FoundHumanController = require('../Controlller/foundHuman.controller');
const imageUpload = require("../Middleware/imageUploader")

// Register a new user
FoundHumanRouter.post('/foundBag', imageUpload.single('image'), FoundHumanController.reportFoundHuman);
FoundHumanRouter.get('/foundBag', FoundHumanController.getFoundAll);
FoundHumanRouter.get('/foundBag/:foundId', FoundHumanController.getFoundById);

module.exports = FoundHumanRouter;