import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [title , setTitle] = useState('');
    const [content, setContent] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const handleImageChange = (e) => {
        setMainImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if(mainImage){
            formData.append('mainImage', mainImage);
        }

        try {
            await axios.post('http://localhost:5000/api/posts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            alert('Post created successfully');
            setTitle('')
            setContent('')
            setMainImage(null)
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
                    <label>Content: </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Main Image: </label>
                    <input
                        type='file'
                        onChange={handleImageChange}
                    />
                </div>
                <button type='submit'>Create Post</button>
            </form>
        </div>
    );
};

export default AdminPanel;