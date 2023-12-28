const bookshelf = require('../knex');
const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');
const Like = require('../Models/Like');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const jwtSecret = 'MySecretBlog'

function decodeToken(req, res, next) {
  // Get the token from the authorization header
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  try {
    const decodedToken = jwt.verify(token, 'MySecretBlog');
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error('Error decoding token:', error);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
}

// Get posts from db
// GET /posts
router.get('/posts', async(req,res)=>{
  try {
    const posts = await Post.fetchAll();
    res.json(posts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Get specific posts from db for the logged-in user
// GET /specificposts
router.get('/specificposts', decodeToken, async (req, res) => {
  try {
    const posts = await Post.where({ user_id: req.userId }).fetchAll();
    res.json(posts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




// Delete /posts/:id
router.delete('/posts/:id', async(req,res)=>{
  const postId = req.params.id;
  try {
    // Fetch the post to be deleted
    const post = new Post({id:postId})

    await Like.where({ post_id: postId }).destroy();

    // Delete the post
    const result = await post.destroy();

    if(result){
      res.json({message:'Post deleted successfully'})
    } else{
      res.status(400).json('User not found')
    }
  } catch (error) {
    console.error('Error deleting user', error);
    res.status(500).json({error:'Internal Server Error'})
  }
})

// POST /posts
router.post('/posts',decodeToken, async (req, res) => {
  
  try {
    const { title, body } = req.body;
    const userId = req.userId;

    const newPost = await new Post({
      title,
      body,
      user_id: userId,
    }).save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// POST /posts/:id/like
router.post('/posts/:id/like', decodeToken, async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;

  try {
    const post = await Post.forge({ id: postId }).fetch();

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user has already liked the post
    const existingLikeCount = await Like.where({ user_id: userId, post_id: postId }).count();
    console.log('existingLikeCount:', existingLikeCount);

    if (existingLikeCount > 0) {
      return res.status(400).json({ error: 'User has already liked this post' });
    } else {

        // Increment the likes count
    const updatedPost = await post.save({ likes: post.get('likes') + 1 }, { method: 'update' });
    
    const user = await User.forge({ id: userId }).fetch();
    console.log('user:', userId)
    console.log('postId:', postId)
    
      // Insert a new record into the 'likes'  table
      const newLike = await Like.forge({ user_id: userId, post_id: postId }).save();

      return res.json({ message: 'Post liked successfully', post: updatedPost.toJSON() });  
    }

  } catch (error) {
    console.error('Error liking post:', error);
    console.error(error);

    return res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

// GET /posts/:id/likes
router.get('/posts/:id/likes', async (req, res) => {
  const postId = req.params.id;

  try {
    // Fetch users who liked the post
    const likes = await Like
      .where({ post_id: postId })
      .fetchAll();

    // Fetch userIds from likes
    const userIds = likes.map(like => like.get('user_id'));

    // Fetch users based on user IDs
    const usersWhoLiked = await new User()
      .query('whereIn', 'id', userIds)
      .fetchAll();

      // Fetch usernames from usersWhoLiked
      const usernames = usersWhoLiked.map(user=>user.get('username'));

    res.json({ usernames });
  } catch (error) {
    console.error('Error fetching users who liked the post:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

  module.exports = router;

  