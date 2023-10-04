const FoundBag = require("../Model/foundBag.model")


exports.createFoundBag = async (req, res) => {
   console.log("dfdsf")
    //    const bag_Image = req.file.filename;
try{
    

    const newFoundBag = new FoundBag({
        // bag_Image: bag_Image,
        bag_color: req.body.bag_color,
        bag_location: req.body.bag_location,
        bag_type: req.body.bag_type,
        Date_and_time: req.body.Date_and_time
    })
     const response = await  newFoundBag.save();
     
     res.status(200).json({success: true, message: "Created found successfully", response})

}catch(err){
    console.log(err)
    return res.status(500).json({success: false, message: "Somthing went wrong ", err})
}

}

exports.getFoundById = async(req, res) =>{
    const {foundId} = req.params;
    try{

         const bagId = await FoundBag.findOne({_id: foundId})
          
         res.status(200).json({success: true,message: " foundById successfully",  bagId})

    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }

}

exports.getFoundAll = async(req, res) =>{
    try{

        const bagId = await FoundBag.find()
          
        res.status(200).json({success: true,message: "foundAll successfully", bagId})

    }catch(err){
        console.log(err)
        return res.status.json({success: false, message: "Somthing went wrong ", err})
    }

}

