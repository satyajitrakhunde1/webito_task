// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
    <div className="sidebar">
        <div className="logo">Logo Here</div>
        <ul>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/products">My Products</NavLink></li>
            <li><NavLink to="/inquiries">Inquiry</NavLink></li>
            <li><NavLink to="/OrderHistory">Order History</NavLink></li>
            <li><NavLink to="/reminder">Reminder</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
        </ul>
        <button className="logout">Log Out</button>
    </div>
);

export default Sidebar;
