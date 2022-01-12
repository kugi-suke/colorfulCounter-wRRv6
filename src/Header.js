import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div>
            <div className="Header">
                <p>React Router Test: Colorful Counter</p>
            </div>
            <nav className="Nav">
                <Link to="/">red counter</Link> |{" "}
                <Link to="/blue">blue counter</Link> |{" "}
                <Link to="/yellow">yellow counter</Link>
            </nav>
        </div>
    );
};

export default Header;