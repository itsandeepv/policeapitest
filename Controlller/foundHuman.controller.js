const FoundHuman = require("../Model/foundHuman.model")


exports.reportFoundHuman = async(req, res) =>{
        //     const origin = req.headers.origin || 'Unknown Origin';
    //    const human_image = `${origin}/${req.file.path}`;
try{
    

    const newFoundHuman = new FoundHuman({
   
        human_name: req.body.human_name,
        human_age: req.body.human_age,
        human_gender: req.body.human_gender,
        // human_image: human_image,
        Date_and_time: req.body.Date_and_time
    })
     const response = await  newFoundHuman.save();
     
     res.status(200).json({success: true, message: "Created found successfully", response})

}catch(err){
    console.log(err)
    return res.status(500).json({success: false, message: "Somthing went wrong ", err})
}

}

exports.getFoundById = async(req, res) =>{
    const {foundId} = req.params;
    try{

         const humanId = await FoundHuman.findOne({_id: foundId})
          
         res.status(200).json({success: true,message: " foundById successfully",  humanId})

    }catch(err){
        console.log(err)
        return res.status(500).json({success: false, message: "Somthing went wrong ", err})
    }

}

exports.getFoundAll = async(req, res) =>{
    try{

        const bagId = await FoundHuman.find()
          
        res.status(200).json({success: true,message: "foundAll successfully", bagId})

    }catch(err){
        console.log(err)
        return res.status.json({success: false, message: "Somthing went wrong ", err})
    }


}
