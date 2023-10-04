const FoundOther = require("../Model/foundOther.model")

exports.createFoundOther = async(data) =>{
   
    try{
    
        const newFoundOther = new FoundOther({
            other_description: req.body.other_description,
            other_location: req.body.other_location,
            Date_and_time: req.body.Date_and_time

        })
         const response = await  newFoundOther.save();
         
         res.status(200).json({success: true, message: "Created found successfully", response})
    
    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }
}

exports.getFoundById = async(data) =>{
    const {foundId} = req.params;
    try{

         const otherId = await FoundOther.findOne({_id: foundId})
          
         res.status(200).json({success: true,message: " foundById successfully",  otherId})

    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }

}

exports.getFoundAll = async(req, res) =>{
    try{

        const otherId = await FoundOther.find()
          
        res.status(200).json({success: true,message: "foundAll successfully", otherId})

    }catch(err){
        console.log(err)
        return res.status.json({success: false, message: "Somthing went wrong ", err})
    }

}
