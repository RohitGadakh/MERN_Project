const billModel=require('../models/billModel');


// add bills
const addBillsController=async(req,res)=>{
try{
 const newBill=new billModel(req.body)
 await newBill.save()
 res.send("Bill Created successfully");
}catch(err){
    res.send("something went wrong")
  console.log(err);
}
}

// get bills data
const getBillsController=async(req,res)=> {
  try{
  const bills=await billModel.find();
  res.send(bills);
  }catch(err){
   console.log(err);
  }
  }
  

module.exports={addBillsController,getBillsController};