const express = require('express');
const router = express.Router();
const User = require('../Models/User');


// Get users from db
// GET /users
router.get('/users', async (req, res) => {
  try {
    const users = await User.fetchAll();
    res.json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Delete /api/users/:id
router.delete('/users/:id', async(req,res)=>{
  const userId = req.params.id;

  try {
    const user = new User({id:userId})
    const result = await user.destroy();

    if(result){
      res.json({ message: 'User deleted successfully' });
    } else{
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


  module.exports = router;


