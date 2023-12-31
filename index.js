const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const connectToDatabase = require("./Config/db");
const civilianRouter = require('./Router/user.route');
const {PetsComplain}  =require("./Router/missingpets.route");
const app = express();
const port = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// app.use('/civilian', civilianRouter);
app.use('/civilian', civilianRouter);
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

