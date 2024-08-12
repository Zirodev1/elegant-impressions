const Post = require('../models/postModel')

const createPost = async (req, res) => {
    try {
      const { title, author, content, categories, tags } = req.body;
  
      const mainImage = req.files['mainImage'] ? {
        data: req.files['mainImage'][0].buffer.toString('base64'),
        contentType: req.files['mainImage'][0].mimetype,
      } : null;

      console.log('Main Image:', mainImage); // Log main image
  
      const additionalImages = req.files['additionalImages'] ? req.files['additionalImages'].map(file => ({
        data: file.buffer.toString('base64'),
        contentType: file.mimetype,
      })) : [];

      console.log('Additional Images:', additionalImages); // Log additional images
  
      const newPost = new Post({
        title,
        author,
        content,
        categories: categories.split(',').map(category => category.trim()),
        tags: tags.split(',').map(tag => tag.trim()),
        mainImage,
        additionalImages,
      });
  
      await newPost.save();
      res.status(201).send("Post created successfully");
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).send("Error creating post");
    }
  };

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).send('Post not found');
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching post');
    }
};

module.exports = { createPost, getPostById };