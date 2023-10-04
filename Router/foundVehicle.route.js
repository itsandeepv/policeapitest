const express = require('express');
const foundVehicleRouter = express.Router();
const FoundVehicleController = require('../Controlller/foundVehicle.controller');
const imageUpload = require("../Middleware/imageUploader")

// Register a new user
foundVehicleRouter.post('/foundVehicle', imageUpload.single('image'), FoundVehicleController.createFoundVehicle);
foundVehicleRouter.get('/foundVehicle', FoundVehicleController.getFoundAll);
foundVehicleRouter.get('/foundVehicle/:foundId',  FoundVehicleController.getFoundById);

module.exports = foundVehicleRouter;