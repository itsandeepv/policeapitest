const mongoose = require("mongoose");

const foundHuman_Schema = new mongoose.Schema(
    {
        human_name: { type: String },
        human_age: { type: Number },
        human_gender: { type: Number },
        human_height: { type: Number },
        human_color: { type: String },
        human_image: { type: String },
        Date_and_time: {
            type: Date,
            default: Date.now()
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("FoundHuman", foundHuman_Schema);