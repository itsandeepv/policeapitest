const FoundPet = require("../Model/foundPet.model")

exports.createFoundPet = async(data) =>{

               //     const origin = req.headers.origin || 'Unknown Origin';
    //    const pet_image = `${origin}/${req.file.path}`;
    try{
    
        const newFoundPet = new FoundPet({
    
            // pet_image: pet_image,
            pet_color: req.body.pet_color,
            pet_location: req.body.pet_location,
            Date_and_time: req.body.Date_and_time

        })
         const response = await  newFoundPet.save();
         
         res.status(200).json({success: true, message: "Created found successfully", response})
    
    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }
}

exports.getFoundById = async(data) =>{

    const {foundId} = req.params;
    try{

         const petId = await FoundPet.findOne({_id: foundId})
          
         res.status(200).json({success: true,message: " foundById successfully",  otherId})

    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }

}

exports.getFoundAll = async(data) =>{

    try{

        const petId = await FoundPet.find()
          
        res.status(200).json({success: true,message: "foundAll successfully", petId})

    }catch(err){
        console.log(err)
        return res.status.json({success: false, message: "Somthing went wrong ", err})
    }
}
