import React from "react";

const Navbar = () => {
  return (
    <div className="heroContainer">
      <nav id="fullNav">
        {/* prettier-ignore */}
        <ul class="navMenu flex">
          <li><a href="#">home</a></li>
          <li><a href="./pages/about.html">About</a></li>
          <li><a href="./pages/blog.html">blog</a></li>
          <li><a href="./pages/portfolio.html">portfolio</a></li>
          <li><a href="./pages/contact.html">Contact</a></li>
        </ul>
      </nav>
      <div class="socialIcons absolute">
        {/* prettier-ignore */}
        <ul class="social flex flexColumn">
          <li><a href="https://github.com/michacurri" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/mkcurrie/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://twitter.com/thisdudecodes" target="_blank"><i class="fab fa-twitter"></i></a></li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
