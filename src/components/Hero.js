import React from 'react'
// import React, { useRef, useLayoutEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
// import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

// const isBrowser = typeof window !== "undefined";

// function getScrollPosition({ element, useWindow }) {
//   if (!isBrowser) return { x: 0, y: 0 };

//   const target = element ? element.current : document.body
//   const position = target.getBoundingClientRect()

//   return useWindow ? { x: window.scrollX, y: window.scrollY } : { x: position.left, y: position.top}
// }

// export function useScrollPosition(effect, deps, element, useWindow, wait) {
//   const position = useRef(getScrollPosition({ useWindow }))

//   let throttleTimeout = null

//   const callBack = () => {
//     const currPos = getScrollPosition({ element, useWindow })
//     effect({ prevPos: position.current, currPos })
//     position.current = currPos
//     throttleTimeout = null
//   }
//   useLayoutEffect(() => {
//     const handleScroll = () => {
//       if (wait) {
//         if (throttleTimeout === null) {
//           throttleTimeout = setTimeout(callBack, wait)
//         }
//       } else {
//         callBack()
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, deps)
// }


const Home = () => (
  <div className="homeContainer">
    <h1>{"{ codes }"} = thisDude</h1>
  </div>
);

const Hero = () => {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const isTop = window.scrollY > 100;
  //     const header = document.getElementById("header");
  //     if (isTop) {
  //       header.classList.add("scrolled");
  //     } else {
  //       header.classList.remove("scrolled");
  //     }
  //   });
  // });

  return (
    <Router>
      <header id="header">
        <div className="navLogo">
          <h4>tDc</h4>
        </div>
        <Navbar />
      </header>
      {/* <About /> */}
      <Switch>
        <Route exact path="/" component={Home} className="underline" />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Hero;
