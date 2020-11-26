import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       

        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link to={'/'} className="navbar-brand" href="#" >API</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                        <Link to={'/'} className="menu-link" >Blog</Link>
                        <Link className="menu-link" to="/postdetails">PostDetails</Link>
                        
                </div>
            </div> */}
        </nav>
    );
};

export default Header;