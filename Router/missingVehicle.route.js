

const express = require("express");
const vehicleRouter = express.Router();
const vehicleController = require("./../Controlller/missingVehicle.controler");
const imageUploader = require("./../Middlewares/missingVehicle")

vehicleRouter.post("/vehicleComplaint" , imageUploader.single('image') , vehicleController.reportMissingVehicle);
vehicleRouter.get("/vehicleComplaints" , vehicleController.allMissingVehicles);
vehicleRouter.get("/vehicleComplaint/:id" ,vehicleController.missingVehicleById);
vehicleRouter.put("/updateVehicleComplaint/:id" ,vehicleController.updateVehicleDetails);
vehicleRouter.delete("/removeComplaint" , vehicleController.deleteVehicleComplaint);

module.exports = vehicleRouter;