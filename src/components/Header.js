// Header.js
import React from 'react';
import './Header.css';

const Header = () => (
    <div className="header">
        <div className="search-bar">
            <input type="text" placeholder="Search Here" />
            <select>
                <option>Select Category</option>
                {/* Options here */}
            </select>
        </div>
        <div className="user-info">
            <span>Sem Roy</span>
            <span>sem12@gmail.com</span>
        </div>
    </div>
);

export default Header;
