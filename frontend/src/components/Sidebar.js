import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {

    }

     return (
        <div className='sidebar'>
            <div className='card mb-4'>
                <div className='card-header'>
                    <h3>Search</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSearch}>
                        <div>
                            <input
                                type='text'
                                className='form-control'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search...'
                            />
                            <button type='submit' className='btn btn-primary'>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     )   
}