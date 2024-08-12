const express = require('express');
const multer = require('multer');
const Post = require('../models/postModel')
const { createPost, getPostById } = require('../controllers/postController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/create', upload.fields([
  { name: 'mainImage', maxCount: 1},
  { name: 'additionalImages', maxCount: 10 }]),
   createPost);

router.get('/:id', getPostById);
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).send('Error fetching posts');
    }
  });

module.exports = router;