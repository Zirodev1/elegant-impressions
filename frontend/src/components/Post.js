import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  // Convert the image data to a Blob and create a URL
  const imageBlob = post.mainImage 
    ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
    : null;
  const imageUrl = imageBlob ? window.URL.createObjectURL(imageBlob) : null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Main"
          style={{ width: '400px', height: 'auto' }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;

