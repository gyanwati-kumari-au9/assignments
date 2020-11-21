import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/about-us">About</Link></li>
                <li><Link className="menu-link" to="/privacy-policy">Privacy Policies</Link></li>
            </ul>
        </nav>
    );
};

export default Header;