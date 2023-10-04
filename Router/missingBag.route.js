// routes/userRoutes.js
const express = require('express');
const bagRouter = express.Router();
const bagController = require('../Controlller/missingBag.controller');
const imageUpload = require("../Middleware/imageUploader")

// Register a new user
bagRouter.post('/bagComplaint', imageUpload.single('image'), bagController.reportMissingBag);
bagRouter.get('/bagComplaint' , bagController.getAllMissingBag);
bagRouter.get('/bagComplaint/:id', bagController.getMissingBagById);
bagRouter.put('/bagComplaint/:id', bagController.updateMissingBagById);
bagRouter.delete('/bagComplaint/:id' , bagController.deleteBagById);


module.exports = bagRouter; 


