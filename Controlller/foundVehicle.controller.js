const FoundVehicle = require("../Model/foundVehicle.model")

exports.createFoundVehicle = async(data) =>{

    
               //     const origin = req.headers.origin || 'Unknown Origin';
    //    const Vehicle_image = `${origin}/${req.file.path}`;
    try{
    
        const newFoundVehicle = new FoundVehicle({
    
            // Vehicle_image: Vehicle_image,
            Vehicle_brand: req.body.Vehicle_brand,
            found_location: req.body.found_location,
            vehicle_type: req.body.vehicle_type,
            Date_and_time: req.body.Date_and_time

        })
         const response = await  newFoundVehicle.save();
         
         res.status(200).json({success: true, message: "Created found successfully", response})
    
    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }
}

exports.getFoundById = async(req, res) =>{
    
    const {foundId} = req.params;
    try{

         const vehicleId = await FoundVehicle.findOne({_id: foundId})
          
         res.status(200).json({success: true,message: " foundById successfully",  vehicleId})

    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }

}

exports.getFoundAll = async(req, res) =>{
    try{

        const vehicleId = await FoundVehicle.find()
          
        res.status(200).json({success: true,message: "foundAll successfully", vehicleId})

    }catch(err){
        console.log(err)
        return res.status.json({success: false, message: "Somthing went wrong ", err})
    }

}
