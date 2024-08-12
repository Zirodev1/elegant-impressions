import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          {posts.map((post) => {
            const imageBlob = post.mainImage 
              ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
              : null;
            const imageUrl = imageBlob ? window.URL.createObjectURL(imageBlob) : null;

            return (
              <div key={post._id} className="card mb-4">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Main"
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-text text-muted">
                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="card-text">{post.content.substring(0, 150)}...</p>
                  <Link to={`/post/${post._id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;

