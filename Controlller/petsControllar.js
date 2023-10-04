const Pets = require("../Model/missingpet")
const jwt = require('jsonwebtoken');

const postPetsComplain = async (req, res, next) => {
    const origin = req.headers.origin || 'Unknown Origin';
    const headertoken = await req.headers.authorization
    const {_id} = await req?.civilian
    try {
        const Pet_image = `${origin}/${req.file.path}`
        const newpetsMissing = new Pets({ ...req.body, Pet_image: Pet_image ,userId : _id })
        let newComplaint = await newpetsMissing.save();
        res.status(201).json({ message: 'success', result: newpetsMissing });

    } catch (error) {
        res.status(500).json({ error: error, });
    }
};


const getAllpetsComplain = async (req, res, next) => {
    try {
        const sqlquery = 'SELECT * FROM contactus';

    } catch (error) {
        res.status(500).json({ error: error, });
    }
}

module.exports = { postPetsComplain, getAllpetsComplain }
