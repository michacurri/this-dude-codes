import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
// import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => (
  <div className="homeContainer">
    <h1>{"{ codes }"} = thisDude</h1>
  </div>
);

const Hero = () => {
  return (
    <Router>
      <header id="header">
        <div className="navLogo">
          <h4>tDc</h4>
        </div>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} className="underline" />
        <Route path="/about" render={() => <About />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        {/* <Route path="/blog" component={Blog} /> */}
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Hero;
