import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
      <div className="navContainer">
        <nav>
          {/* prettier-ignore */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
