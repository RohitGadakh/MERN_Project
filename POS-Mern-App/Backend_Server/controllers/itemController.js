const itemModel=require('../models/itemModel');

// get items
const getItemController=async(req,res)=> {
try{
const items=await itemModel.find();
res.status(200).send(items);
}catch(err){
 console.log(err);
}
}

// add items
const addItemController=async(req,res)=>{
try{
 const newItem=new itemModel(req.body)
 await newItem.save()
 res.status(201).send("item save successfully");
}catch(err){
    res.status(400).send("error",err)
  console.log(err);
}
}

// update item
const editItemController=async(req,res)=>{
try{
 await itemModel.findOneAndUpdate({_id:req.body.itemId},req.body)
 res.status(201).send("Item Updated")
}catch(err){
  res.status(400).send(err);
  console.log(err)
}
}

// delete 
const deleteItemController=async(req,res)=>{
  try{
    const {itemId}=req.body;
   await itemModel.findOneAndDelete({_id:itemId})
   res.status(200).send("Item Deleted")
  }catch(err){
    res.status(400).send(err);
    console.log(err)
  }
  }
module.exports={getItemController,addItemController,editItemController,deleteItemController};