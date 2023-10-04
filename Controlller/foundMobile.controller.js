const FoundMobile = require("../Model/foundMobile.model")


exports.createFoundMobile = async(data) =>{

           //     const origin = req.headers.origin || 'Unknown Origin';
    //    const mobile_image = `${origin}/${req.file.path}`;
try{
    
    const newFoundMobile = new FoundMobile({
  
        mobile_brand: req.body.mobile_brand,
        mobile_location: req.body.mobile_location,
        human_gender: req.body.human_gender,
        // mobile_image: mobile_image,
        Date_and_time: req.body.Date_and_time
    })
     const response = await  newFoundMobile.save();
     
     res.status(200).json({success: true, message: "Created found successfully", response})

}catch(err){
    console.log(err)
    return res.status(500).json({success: false, message: "Somthing went wrong ", err})
}

}

exports.getFoundById = async(req, res ) =>{

    const {foundId} = req.params;
    try{

         const mobileId = await FoundMobile.findOne({_id: foundId})
          
         res.status(200).json({success: true,message: " foundById successfully",  mobileId})

    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }


}

exports.getFoundAll = async(req, res) =>{
    try{

        const mobileId = await FoundMobile.find()
          
        res.status(200).json({success: true,message: "foundAll successfully", mobileId})

    }catch(err){
        console.log(err)
        return res.status.json({success: false, message: "Somthing went wrong ", err})
    }


}
