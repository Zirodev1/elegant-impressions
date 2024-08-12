import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [title , setTitle] = useState('');
    const [author, setAuthor] = useState('Admin')
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState('');
    const [tags, setTags] = useState('')
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const handleImageChange = (e) => {
        setMainImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author)
        formData.append('content', content);
        formData.append('categories', categories);
        formData.append('tags', tags);
        
        if(mainImage){
            formData.append('mainImage', mainImage);
        }

        additionalImages.forEach((image, index) => {
            formData.append(`additionalImages`, image)
        })

        try {
            await axios.post('http://localhost:5000/api/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            alert('Post created successfully');
            setTitle('');
            setAuthor('Admin');
            setContent('');
            setCategories('');
            setTags('');
            setMainImage(null);
            setAdditionalImages([])
        } catch (error) {
            console.error('Error creating post: ', error);
            alert('Failed to create post');
        }
    }

    return (
        <div>
            <h2>create new post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author: </label>
                    <input
                        type='text'
                        value={author}
                        placeholder='Admin'
                       
                    />
                </div>
                <div>
                    <label>Content: </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Categories (comma-separated): </label> {/* New input for categories */}
                    <input
                        type='text'
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    />
                </div>
                <div>
                    <label>Tags (comma-separated): </label> {/* New input for tags */}
                    <input
                        type='text'
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <div>
                    <label>Main Image: </label>
                    <input
                        type='file'
                        onChange={handleImageChange}
                    />
                </div>
                <div>
                    <label>Additional Images: </label> {/* New input for additional images */}
                    <input
                        type='file'
                        multiple
                        onChange={(e) => setAdditionalImages(Array.from(e.target.files))}
                    />
                </div>
                <button type='submit'>Create Post</button>
            </form>
        </div>
    );
};

export default AdminPanel;