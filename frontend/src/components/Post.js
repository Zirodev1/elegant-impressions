import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageError, setImageError ] = useState(null);

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

  useEffect(() => {
    if (post && post.mainImage) {
      try {
        const decodeBase64Image = (base64Data, contentType) => {
          // Ensure that base64Data is a string
          if (typeof base64Data !== 'string') {
            base64Data = String.fromCharCode.apply(null, new Uint8Array(base64Data.data));
          }

          const binaryString = window.atob(base64Data.replace(/\s/g, ''));
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          const blob = new Blob([bytes], { type: contentType });
          return URL.createObjectURL(blob);
        };

        const url = decodeBase64Image(post.mainImage.data, post.mainImage.contentType);
        setImageUrl(url);
      } catch (error) {
        console.error('Error decoding image:', error);
        setImageError('Error displaying the image.');
      }
    }
  }, [post]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      {imageError && <p>{imageError}</p>}
      {imageUrl && !imageError && (
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

