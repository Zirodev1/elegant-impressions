const Post = require('../models/postModel')

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Check for the main image
        const mainImage = req.file ? {
            data: req.file.buffer.toString('base64'),
            contentType: req.file.mimetype,
        } : null;

        console.log(mainImage.data)

        // Check for additional images
        const additionalImages = req.files && req.files['additionalImages'] ? req.files['additionalImages'].map(file => ({
            data: file.buffer.toString('base64'),
            contentType: file.mimetype,
        })) : [];

        const newPost = new Post({
            title,
            content,
            mainImage,
            additionalImages,
        });

        await newPost.save();
        res.status(201).send("Post created successfully");
    } catch (error) {
        console.error(error);
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