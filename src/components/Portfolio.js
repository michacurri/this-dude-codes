import React from "react";

const Portfolio = () => {
  return (
    <main>
      <div className="innerWrapper">
        <h3>A selection of my projects from Bootcamp</h3>
        <section className="portfolioFlexContainer">
          {/* <!-- <div className="projectContainer">
      <a href="/pages/portfolio/project-one/p1-index.html" target="_blank" rel="noopener noreferrer">
        <h2>Project One</h2>
        <h4>PSD conversion</h4>
      </a>
        <h5>Rules</h5>
        <ol>
          <li>Flexible from 320px</li>
          <li>Uses FlexBox</li>
          <li>Nav menu disappears</li>
          <li>No JavaScript</li>
        </ol>
        <h5>What I did</h5>
        <p>Took a mobile-first approach with three media queries to recreate the provided design. </p>
    </div> --> */}
          <div className="projectContainer">
            <a href="/pages/portfolio/beatMaker/index.html" target="_blank" rel="noopener noreferrer">
              <h2>Project Three</h2>
              <h4>jQuery Application</h4>
            </a>
            <h5>Rules</h5>
            <ol>
              <li>Our own design</li>
              <li>A Game, or interactive application</li>
              <li>Must use jQuery</li>
              <li>Manipulates the DOM</li>
            </ol>
            <h5>What I did</h5>
            <p>
              Created a beat machine, designed with Grid, where the user can
              interact either by touch, or by keyboard, to play sounds from the
              iconic 808 drum machine
            </p>
          </div>
          <div className="projectContainer">
            <a href="/pages/portfolio/airQualityApp/index.html" target="_blank" rel="noopener noreferrer">
              <h2>Project Four</h2>
              <h4>Paired API</h4>
            </a>
            <h5>Rules</h5>
            <ol>
              <li>Our own design</li>
              <li>Must use an API</li>
              <li>Must use jQuery, Namespacing, SCSS</li>
              <li>Manipulates the DOM</li>
            </ol>
            <h5>What we did</h5>
            <p>
              Created a map-based application using Leaflet.js that connects
              with an air quality API, to present the user with location based
              air quality and weather information, built on Grid.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Portfolio
