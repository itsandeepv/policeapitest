const express = require('express');
const foundMobileRouter = express.Router();
const FoundMobileController = require('../Controlller/foundMobile.controller');
const imageUpload = require("../Middleware/imageUploader")

// Register a new user
foundMobileRouter.post('/foundMobile', imageUpload.single('image'), FoundMobileController.createFoundMobile);
foundMobileRouter.get('/foundMobile', FoundMobileController.getFoundAll);
foundMobileRouter.get('/foundMobile/:foundId',  FoundMobileController.getFoundById);
module.exports = foundMobileRouter; 