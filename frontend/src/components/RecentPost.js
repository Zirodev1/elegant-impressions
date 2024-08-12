import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts?limit=3'); // Fetch the 3 most recent posts
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Recent Blog Posts</h2>
      <div className="row">
        {posts.map((post) => {
          const imageBlob = post.mainImage 
            ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
            : null;
          const imageUrl = imageBlob ? window.URL.createObjectURL(imageBlob) : null;

          return (
            <div key={post._id} className="col-md-4 mb-4">
              <div className="card">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={post.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-4">
        <Link to="/blog" className="btn btn-primary">More Posts</Link>
      </div>
    </div>
  );
};

export default RecentPosts;
