const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    mainImage: {
        data: Buffer,
        contentType: String,
    },
    additionalImages: [{
        data: Buffer,
        contentType: String,
    }],
    categories: [String],
    tags: [String],
    date: { type: Date, default: Date.now}
})

module.exports = mongoose.model("Post", postSchema)