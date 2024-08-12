import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts?limit=5');
        setRecentPosts(response.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="sidebar">
      <div className="card mb-4">
        <div className="card-header">
          <h3>Search</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div>
              <input
                type="text"
                className="form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Recent Posts</h3>
        </div>
        <div className="card-body">
        {recentPosts.map((post) => {
            const imageBlob = post.mainImage 
              ? new Blob([Int8Array.from(post.mainImage.data.data)], { type: post.mainImage.contentType }) 
              : null;
            const imageUrl = imageBlob ? window.URL.createObjectURL(imageBlob) : null;

            return (
              <div key={post._id} className="mb-3 d-flex align-items-center">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Main"
                    className="img-fluid"
                    style={{ width: '50px', height: '50px', marginRight: '10px' }}
                  />
                )}
                <Link to={`/post/${post._id}`} className="recent-post-title">
                  {post.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Categories</h3>
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Tags</h3>
        </div>
        <div className="card-body">
          <ul className="list-inline">
            {tags.map((tag, index) => (
              <li key={index} className="list-inline-item">
                <Link to={`/tag/${tag}`} className="badge bg-primary">{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
