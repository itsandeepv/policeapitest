const express = require("express");
const otherRouter = express.Router();
const missingOtherController = require("./../Controlller/missingOther.controller");
const imageUploader = require("./../Middlewares/missingOther");

otherRouter.post("/otherComplaint" , imageUploader.single('image') , missingOtherController.createOther);
otherRouter.get("/otherComplaints" , missingOtherController.getAllMissingReportInOtherCategory);
otherRouter.get("/otherComplaint/:id" , missingOtherController.getComplaintsOfOtherById);
otherRouter.put("/updateOtherComplaint/:id" ,missingOtherController.updateDetailsForOther);
otherRouter.delete("/deleteOtherComplaint/:id" , missingOtherController.deleteOther);

module.exports = otherRouter;