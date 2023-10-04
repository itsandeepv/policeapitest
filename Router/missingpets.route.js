
const express = require("express");
const {postPetsComplain} =  require("../Controlller/petsControllar")
const app = express.Router();
const { authMiddlware } = require("../Middlewares/authmiddleware");


const PetsComplain = app.post("/missing-pets" ,authMiddlware, postPetsComplain);
// const getAllContact = app.get("/admin-getContact" , getAllcontacts);
//  imageUploader.single('Pet_image')

module.exports = {PetsComplain };
