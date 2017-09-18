var express =require('express');
const router=express.Router();
const Contact=require('../models/collection');
const Register=require('../models/register');
const validation=require('../validation/registervalidation');
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
			 return next(err);
			res.json({msg:'failed to update data'});
		}
		else{
			res.json({msg:'contact created'});
		}
	});
});
router.post('/register',(req,res,next)=>{
	validation.validateRegistration(req.body, function(err, data){
		if (err) {
            next(err);
        } else {
        	let newUser= new Register({
		email:req.body.email,
		username:req.body.username,
		password:req.body.password,
		confirm_password:req.body.confirmpassword,


	});
	newUser.save((err,contact)=>{
		if(err){
			 return next(err)
			res.json({msg:'failed to update data'});
		}
		else{
			res.json({msg:'contact created'});
		}
	})
}
	})
	
});

module.exports=router;

