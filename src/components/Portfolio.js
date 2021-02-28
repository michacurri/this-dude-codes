import React from "react";
import {
  IconHTML5,
  IconCSS3,
  IconSASS,
  IconJS,
  IconJQUERY,
  IconRESPONSIVE,
  IconGITHUB,
  IconAPI,
  IconREACT,
  IconFIREBASE,
  IconNODE,
  IconMATERIAL,
  IconMONGODB,
  IconEXPRESS,
} from "./Icons";

import aeroImg from '../assets/images/portfilioBackgrounds/aero.jpg'
import beatmakerImg from "../assets/images/portfilioBackgrounds/beatMakerSolo.png";
import airClearImg from "../assets/images/portfilioBackgrounds/airCLear.png";
import thisDudeCodesImg from "../assets/images/portfilioBackgrounds/thisDudeCodes.jpg";
import residentActivityImg from "../assets/images/portfilioBackgrounds/residentActivity.png";

const Portfolio = () => {
  return (
    <main>
      <section className="portfolioFlexContainer flex flexColumn">
        {/* FIRST ITEM */}
        <section id="aero" className="projectContainer flex flexColumn">
          <div className="innerWrapper">
            <a
              className="underline"
              href="https://aero-workorder-management.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>AERO Workorder Management</h2>
            </a>
            <div className="flexContainer flex">
              <div className="descriptionContainer">
                <p>
                  Full-Stack Custom-API project to control the flow of work in a bike-shop. Built from the ground up in the MERN-stack, AERO allows administrators to create services; record workorders; and evaluate staffing requirements. Users can request service, and view in-progress and historical workorders. 
                </p>
              </div>
              <div className="portImgContainer">
                <img src={aeroImg} alt="" />
              </div>
            </div>
            <ul className="portfolioIconBox">
              <IconMONGODB />
              <IconEXPRESS />
              <IconREACT />
              <IconNODE />
              <IconMATERIAL />
              <IconJS />
              <IconGITHUB />
            </ul>
          </div>
        </section>
        {/* SECOND-ITEM */}
        <section id="beatmaker" className="projectContainer flex flexColumn">
          <div className="innerWrapper">
            <a
              className="underline"
              href="../projects/beatmaker/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>BeatMaker Solo</h2>
            </a>
            <div className="flexContainer flex">
              <div className="descriptionContainer">
                <p>
                  The first bootcamp free-for-all project // introducing the{" "}
                  BeatMaker Solo, powered exclusively by jQuery; styled with
                  Grid and SCSS; and designed mobile-first. The user can
                  interact either by touch, or by keyboard, to play sounds from
                  the iconic 808 drum machine
                </p>
              </div>
              <div className="portImgContainer">
                <img src={beatmakerImg} alt="" />
              </div>
            </div>
            <ul className="portfolioIconBox">
              <IconHTML5 />
              <IconCSS3 />
              <IconSASS />
              <IconJS />
              <IconJQUERY />
              <IconRESPONSIVE />
              <IconGITHUB />
            </ul>
          </div>
        </section>

        {/* THIRD-ITEM */}
        <section id="airClear" className="projectContainer flex flexColumn">
          <div className="innerWrapper">
            <a
              className="underline"
              href="https://airclear.netlify.app/"
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
              <IconHTML5 />
              <IconCSS3 />
              <IconSASS />
              <IconJS />
              <IconJQUERY />
              <IconRESPONSIVE />
              <IconAPI />
              <IconGITHUB />
            </ul>
          </div>
        </section>

        {/* FOURTH-ITEM */}
        <section
          id="thisDudeCodes"
          className="projectContainer flex flexColumn"
        >
          <div className="innerWrapper">
            <a
              className="underline"
              href="https://thisdude.codes"
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
              <IconHTML5 />
              <IconCSS3 />
              <IconSASS />
              <IconJS />
              <IconREACT />
              <IconRESPONSIVE />
              <IconGITHUB />
            </ul>
          </div>
        </section>

        {/* FIFTH-ITEM */}
        <section
          id="residentActivity"
          className="projectContainer flex flexColumn"
        >
          <div className="innerWrapper">
            <a
              className="underline"
              href="https://michacurri.github.io/residentActivityApp/"
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
                  Bootcamp React and Database project - a work in progress: this
                  application is meant for my wife to use in her career. Using
                  Firebase for authentication and as a DB; read/write to a
                  database; and allow users to choose the outings prepared by
                  the administrator. Powered by React; styled with Grid and
                  SCSS.
                </p>
              </div>
            </div>
            <ul className="portfolioIconBox">
              <IconHTML5 />
              <IconCSS3 />
              <IconSASS />
              <IconJS />
              <IconREACT />
              <IconFIREBASE />
              <IconRESPONSIVE />
              <IconGITHUB />
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Portfolio;
