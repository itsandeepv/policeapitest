const express = require('express');
const foundPetRouter = express.Router();
const FoundPetController = require('../Controlller/foundPet.controller');
const imageUpload = require("../Middleware/imageUploader")

// Register a new user
foundPetRouter.post('/foundPet', imageUpload.single('image'), FoundPetController.createFoundPet);
foundPetRouter.get('/foundPet', FoundPetController.getFoundAll);
foundPetRouter.get('/foundPet/:foundId',  FoundPetController.getFoundById);

module.exports = foundPetRouter;