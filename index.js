const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const connectToDatabase = require("./Config/db");
// const civilianRouter = require('./Router/civilian.route');
const civilianRouter = require('./Router/user.route');
const bagRouter = require('./Router/missingBag.route');
const foundBagRouter = require('./Router/foundBag.route');
const foundHumanRouter = require('./Router/foundHuman.route');
const foundMobileRouter = require('./Router/foundMobile.route');
const foundOtherRouter = require('./Router/foundOther.route');
const foundPetRouter = require('./Router/foundPet.route');
const vehicleRouter = require("./Router/missingVehicle.route")
const missingOtherRouter = require("./Router/missingOther.route");
const bannerRouter = require("./Router/banner.route");
const {PetsComplain}  =require("./Router/missingpets.route");
const app = express();
const port = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/files", express.static("/upload"))
app.use(cors());

// app.use('/civilian', civilianRouter);
app.use('/civilian', civilianRouter);
app.use('/missing-bag', bagRouter);
app.use('/found-bag', foundBagRouter);
app.use('/found-human', foundHumanRouter)
app.use('/found-mobile', foundMobileRouter)
app.use('/found-other', foundOtherRouter)
app.use('/found-pet', foundPetRouter)
app.use('/missing-vehicle', vehicleRouter);
app.use("/missingOther", missingOtherRouter);
app.use("/Banner", bannerRouter);
app.use("/api/v1/", PetsComplain );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, async () => {
    try {
        await connectToDatabase();
        console.log("runing on port " , port);
    } catch (err) {
        console.log({ message: "Failed to connect Database", err });
    }
});

