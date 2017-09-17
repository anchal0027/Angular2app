var express =require('express');
const router=express.Router();
const Contact=require('../models/collection')
router.get('/contacts',(req,res,next)=>{
	Contact.find((err,contacts)=>{
		res.json(contacts);
	})
});
router.post('/addcontact',(req,res,next)=>{
	let newContact=new Contact({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		phone:req.body.phone

	});
	newContact.save((err,contact)=>{
		if(err){
			res.json({msg:'failed to update data'});
		}
		else{
			res.json({msg:'contact created'});
		}
	});
});
module.exports=router;

