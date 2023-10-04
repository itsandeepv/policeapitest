const mongoose = require("mongoose");

const vehicle_Schema = new mongoose.Schema(
    {
        Vehicle_name: {
            type: String,
            required: true
        },
        Vehicle_date: {
            type: Date,
            required: true
        },
        Vehicle_color: {
            type: String,
            required: true
        },
        Vehicle_location: {
            type: String,
            required: true
        },
        Vehicle_image: {
            type: String,
            required: true
        },
        Vehicle_brand: {
            type: String,
            required: true
        },
        Vehicle_Station: {
            type: String,
            required: true
        },
        Vehicle_model: {
            type: String,
            required: true
        },
        Vehicle_address: {
            type: String,
            required: true
        },
        Vehicle_hounarname: {
            type: String,
            required: true
        },
        Vehicle_email: {
            type: String,
            required: true
        },
        Vehicle_number: {
            type: String,
            required: true
        },
        Vehicle_phoneNumber: {
            type: String,
            required: true
        },
        Vehicle_state: {
            type: String,
            required: true
        },
        Vehicle_City: {
            type: String,
            required: true
        },
        Vehicle_bodynumber: {
            type: String,
            required: true
        },
        Vehicle_enginenumber: {
            type: String,
            required: true
        },
        Vehicle_aadharcard: {
            type: String,
            required: true
        },
        Vehicle_pincode: {
            type: String,
            required: true
        },
        Vehicle_type: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("MissingVehicle", vehicle_Schema);