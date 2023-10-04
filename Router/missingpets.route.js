
const express = require("express");
const {postPetsComplain} =  require("../Controlller/petsControllar")
const app = express.Router();
const imageUploader = require("../Middlewares/missingVehicle");
const { authMiddlware } = require("../Middlewares/authmiddleware");


const PetsComplain = app.post("/missing-pets" ,authMiddlware, imageUploader.single('Pet_image'), postPetsComplain);
// const getAllContact = app.get("/admin-getContact" , getAllcontacts);
//  

module.exports = {PetsComplain };
