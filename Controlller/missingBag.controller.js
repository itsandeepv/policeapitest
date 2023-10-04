const MissingBag = require("../Model/missingBag.model");

exports.reportMissingBag = async function(req, res){

    const origin = req.headers.origin || 'Unknown Origin';

    // const Bag_image = req.file.fileName
    const Bag_image = `${origin}/${req.file.path}`;

    try{
        
        const newBagMissing = new MissingBag({
            
         Bag_color : req.body.Bag_color,
         Bag_location : req.body.Bag_location,
         Bag_brand : req.body.Bag_brand,
         Bag_hounorname :req.body.Bag_hounorname,
         Bag_address : req.body.Bag_address,
         Bag_city : req.body.Bag_city,
         Bag_state : req.body.Bag_state,
         Bag_number : req.body.Bag_number,
         Bag_email : req.body.Bag_email,
         Bag_aadharcard : req.body.Bag_aadharcard,
          Bag_pin: req.body.Bag_pin,
         Bag_type : req.body.Bag_type,
         Bag_Date: req.body.Bag_Date,
         Bag_image
         
        })

          if(!newBagMissing) {
              res.json({message : "fill all details"}).status(404);  
          }
          else if(newBagMissing) {
             let newComplaint = await newBagMissing.save();
             res.json({message: 'success', result: newComplaint}).status(201);
          }

    } catch(error) {
        console.log('Error occured.', error.message);
        res.send(error.message).status(500);
    
}}




exports.getMissingBagById = async function(req, res){
       
    
       try{

        const MissingBagById = await MissingBag.findOne({_id: req.params.id})
    

        if(!MissingBagById) return res.status(400).json({success: false, message: "Please enter a valid missingId"})
            
        
        res.status(200).json({success: true, MissingBagById})


       }catch(error){
        res.status(500).json({success: false , message:'Error Occured in server Process' + error.message})
       }

}

exports.getAllMissingBag = async function(req, res){
     
    try{
          
        const missingBag = await MissingBag.find()
       
        if(missingBag)  res.status(200).json({success: true, missingBag})
 
      
    }catch(error){
       res.status(500).json({success: false, message: "Some internal server error occured"})
    }
 }
 



 exports.updateMissingBagById = async function(req, res){
      const dataUpdate = req.body;
      const id = req.params.id

    try{
       
        const updatedBag = await MissingBag.findByIdAndUpdate(id, dataUpdate);
       

        if(!updatedBag) return res.status(400).json({success: false, message: "Please enter a valid updateMissing"})

         res.status(200).json({success: true, message: "Update updateMissing successfully"})

    }catch(error){

       return res.status(500).json({success: false , message:'Error Occured in SignUp Process' + error.message})
    }

}


exports.deleteBagById =async function(req, res){
  
    try{
        const missingBag = await MissingBag.deleteOne({_id: req.params.id})
          
        if(!missingBag)  return res.status(400).json({success: false, message: "Please enter a valid id"})
           

     res.status(200).json({success: true, message: "Delete missingBag successfully"})

    }catch(error){
        res.status(500).json({success: false , message:'Error Occured in server Process' + error.message})
    }


}

