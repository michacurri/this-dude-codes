import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => <h1>Home</h1>;

const Hero = () => {
  return (
    <Router>
      <header>
        <h1>thisDude={"{codes}"}</h1>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Hero;
