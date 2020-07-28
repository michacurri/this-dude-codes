import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {

  return (
    <nav>
      {/* prettier-ignore */}
      <ul>
        <li><Link to="/" className="underline">Home</Link></li>
        <li><Link to="/about" className="underline">About</Link></li>
        {/* <li><Link to="/blog" className="underline">Blog</Link></li> */}
        <li><Link to="/portfolio" className="underline">Portfolio</Link></li>
        <li><Link to="/contact" className="underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
