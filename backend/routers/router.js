const express = require("express");
const router = new express.Router();
const User = require("../models/scheema");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middlewere/fetchUser')

let success = true;

router.post("/signin", async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).send("req have no data");
    }

    const {_id, fullName, email, phone, address, password, cpassword } = req.body;
    if (password === cpassword) {
      let user = new User(req.body);

      // hash password genrate
      const saltPassword = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password,saltPassword)
      const hashCPassword = await bcrypt.hash(cpassword,saltPassword)
       // genrate auth token
       const authToken = jwt.sign({_id},process.env.SECREATEKEY,{
        expiresIn: '2 min'
       })

      if(user.isModified('password')){
        await User.create({
            fullName, email, phone,address,
            password: hashPassword,
            cpassword: hashCPassword,
            tokens:[
                {
                    token:authToken
                }
            ]
         });
         
      }
      res.json({success, authToken });
      console.log(authToken);
      
    } else {
        success = false;
      return res.status(402).json({ success : "Password does not match" });
    }
  } catch (error) {
    res.status(401).send("sign in error " + error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const  {email, password}  = req.body;
    const user = await User.findOne({ email });
    const comparePassword = await bcrypt.compare(password,user.password);
    if (comparePassword) {
        // genrate auth token
       const authToken = jwt.sign({_id:user._id},process.env.SECREATEKEY,{
        expiresIn: '20 min'
       })
       success = true;
      res.json({success,authToken});
      console.log(authToken);
    } else {
        success = false;
     return res.status(402).json({success:" user details are not valid"});
    }
  } catch (error) {
    res.status(500).send("Invalid login Credentials");
  }
});

router.get('/contact',fetchUser, async(req, res)=>{
  try {
    const userId = req.body._id;
    const user = await User.findById(userId);
    res.json({user})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error loggedin User");
  }

})


module.exports = router;
