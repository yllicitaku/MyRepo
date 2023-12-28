const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/User')
const jwt = require('jsonwebtoken');
const jwtSecret = 'MySecretBlog'

// Login rotue
// User - Check Login
router.post('/login', async(req,res)=>{
  try {
    const {username, password} = req.body;

    //Get user by username
    const user = await User.where({username}).fetch();

    if(user){

      // Compare password with the hashed password stored on db
      const passwordMatch = await bcrypt.compare(password, user.get('password'));
      
      if(passwordMatch){
        const token = jwt.sign({ userId: user.get('id') }, jwtSecret,);
               
        // Save the token to a cookie
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ token, message: 'Login successful' });

      } else{
        res.status(401).json({error:"Invalid credentials"});
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
  }
})


module.exports = router;
