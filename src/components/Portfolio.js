import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jQueryIcon from "../assets/icons/jquery.png";
import firebaseIcon from "../assets/icons/firebase.png";
import responsiveIcon from "../assets/icons/resp.png";
import apiIcon from "../assets/icons/api.png";

import beatmakerImg from "../assets/images/portfilioBackgrounds/beatMakerSolo.png";
import airClearImg from "../assets/images/portfilioBackgrounds/airCLear.png";
import thisDudeCodesImg from "../assets/images/portfilioBackgrounds/thisDudeCodes.jpg";
import residentActivityImg from "../assets/images/portfilioBackgrounds/residentActivity.png";


const Portfolio = () => {
  return (
    <main>
      <section className="portfolioFlexContainer flex flexColumn">
        {/* FIRST ITEM */}
        <section id="beatmaker" className="projectContainer flex flexColumn">
          <div className="innerWrapper">
            <a
              href="/pages/portfolio/beatMaker/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>BeatMaker Solo</h2>
            </a>
            <div className="flexContainer flex">
              <div className="descriptionContainer">
                <p>
                  The first bootcamp free-for-all project // introducing the{" "}
                  <span>BeatMaker Solo</span>, powered exclusively by jQuery;
                  styled with Grid and SCSS; and designed mobile-first. The user
                  can interact either by touch, or by keyboard, to play sounds
                  from the iconic 808 drum machine
                </p>
              </div>
              <div className="portImgContainer">
                <img src={beatmakerImg} alt="" />
              </div>
            </div>
            <ul className="portfolioIconBox">
              <li>
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  alt="Icon: up to date HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "css3"]}
                  alt="Icon: Styled with CSS3"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  alt="Icon: Styles Compiled with SCSS"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "js"]}
                  alt="Icon: Built with JavaScript"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={jQueryIcon}
                  alt="Icon: Built with jQuery"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={responsiveIcon}
                  alt="Icon: Mobile-First Responsive Design"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  alt="Icon: HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
            </ul>
          </div>
        </section>

        {/* SECOND ITEM */}
        <section id="airClear" className="projectContainer flex flexColumn">
          <div className="innerWrapper">
            <a
              href="/pages/portfolio/airclear/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>AirClear Air Quality</h2>
            </a>
            <div className="flexContainer flex">
              <div className="portImgContainer">
                <img src={airClearImg} alt="" />
              </div>
              <div className="descriptionContainer">
                <p>
                  Bootcamp paired API project: a map-based application that
                  builds on the Leaflet.js library; pulls data from the
                  AirVisual API; and presents the user with location based
                  air-quality and weather information. Powered by jQuery; styled
                  with Grid and SCSS; and designed mobile-first.
                </p>
              </div>
            </div>
            <ul className="portfolioIconBox">
              <li>
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  alt="Icon: up to date HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "css3"]}
                  alt="Icon: Styled with CSS3"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  alt="Icon: Styles Compiled with SCSS"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "js"]}
                  alt="Icon: Built with JavaScript"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={jQueryIcon}
                  alt="Icon: Built with jQuery"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={apiIcon}
                  alt="Icon: API - Application Programming Interface"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={responsiveIcon}
                  alt="Icon: Mobile-First Responsive Design"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  alt="Icon: HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
            </ul>
          </div>
        </section>

        {/* THIRD ITEM */}
        <section
          id="thisDudeCodes"
          className="projectContainer flex flexColumn"
        >
          <div className="innerWrapper">
            <a
              href="../../public/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>This Dude Codes</h2>
            </a>
            <div className="flexContainer flex">
              <div className="descriptionContainer">
                <p>
                  React-Powered portfolio that showcases my personal design
                  language and capabilities building in a react environment.
                  Styled with Flexbox, Grid and SCSS; and designed
                  desktop-first. All images are my own.
                </p>
              </div>
              <div className="portImgContainer">
                <img src={thisDudeCodesImg} alt="" />
              </div>
            </div>
            <ul className="portfolioIconBox">
              <li>
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  alt="Icon: up to date HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "css3"]}
                  alt="Icon: Styled with CSS3"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  alt="Icon: Styles Compiled with SCSS"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  alt="Icon: Powered by REACT"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "js"]}
                  alt="Icon: Built with JavaScript"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={responsiveIcon}
                  alt="Icon: Mobile-First Responsive Design"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  alt="Icon: HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
            </ul>
          </div>
        </section>

        {/* FOURTH ITEM */}
        <section id="residentActivity" className="projectContainer flex flexColumn">
          <div className="innerWrapper">
            <a
              href="/pages/portfolio/residentActivityApp/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Resident Activity App</h2>
            </a>
            <div className="flexContainer flex">
              <div className="portImgContainer">
                <img src={residentActivityImg} alt="" />
              </div>
              <div className="descriptionContainer">
                <p>
                  Bootcamp React and Database project - a work in progress: this application is meant for my wife to use in her career. import {  } from "module"; will authenticate the administrator or user; read/write to a database; and allow users to choose the outings prepared by the administrator. Powered by React; styled with Grid and SCSS. 
                </p>
              </div>
            </div>
            <ul className="portfolioIconBox">
              <li>
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  alt="Icon: up to date HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "css3"]}
                  alt="Icon: Styled with CSS3"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  alt="Icon: Styles Compiled with SCSS"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "js"]}
                  alt="Icon: Built with JavaScript"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  alt="Icon: Powered by REACT"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={firebaseIcon}
                  alt="Icon: Firebase Database"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <img
                  src={responsiveIcon}
                  alt="Icon: Mobile-First Responsive Design"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  alt="Icon: HTML5"
                  mask={["fas", "circle"]}
                  transform="grow-7 left-1.5 up-2.2"
                  fixedWidth
                />
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Portfolio;
