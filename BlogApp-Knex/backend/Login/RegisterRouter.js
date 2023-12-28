const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/User');

// Register route
router.post('/register', async(req,res)=>{
    const {username, email, password} = req.body;

    try {
        // Hash the password before sending in the db
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user record using the Bookshelf model
        const newUser = await User.forge({
            username,
            email,
            password:hashedPassword
        }).save(null, { method: 'insert' });

        console.log('New User:', newUser);
        res.json({ message: 'Registration successful', user: newUser.toJSON()});
        
    } catch (error) {
        console.error('Error during registration:', error.message);
  console.error('Error stack:', error.stack);
  res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
