const express = require('express');
const foundOtherRouter = express.Router();
const FoundOtherController = require('../Controlller/foundOther.controller');
const imageUpload = require("../Middleware/imageUploader")

// Register a new user
foundOtherRouter.post('/foundOther', imageUpload.single('image'), FoundOtherController.createFoundOther);
foundOtherRouter.get('/foundOther', FoundOtherController.getFoundAll);
foundOtherRouter.get('/foundOther/:foundId',  FoundOtherController.getFoundById);

module.exports = foundOtherRouter;