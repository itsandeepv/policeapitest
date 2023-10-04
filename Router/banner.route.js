

const express = require("express");
const BannerRouter = express.Router();
const BannerController = require("./../Controlller/banner.controller")
const BannerMiddleware = require("./../Middlewares/BannerImage");


BannerRouter.post("/addBanner" , BannerMiddleware.single("image"), BannerController.addBanner);
BannerRouter.get("/allBanners" , BannerController.getBanners);

module.exports = BannerRouter;