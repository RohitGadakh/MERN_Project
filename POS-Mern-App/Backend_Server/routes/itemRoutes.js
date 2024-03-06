
const express=require('express');
const { getItemController, addItemController,editItemController, deleteItemController } = require('../controllers/itemController');
const router=express.Router();

//routes
router.get('/get-items',getItemController)
router.post('/add-items',addItemController)
// method put
router.put('/edit-item',editItemController)
// method delete
router.post('/delete-item',deleteItemController)

module.exports=router;















