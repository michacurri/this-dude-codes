import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jQueryIcon from "../assets/icons/jquery.png";
import firebaseIcon from "../assets/icons/firebase.png";
import responsiveIcon from "../assets/icons/resp.png";
import apiIcon from "../assets/icons/api.png";
import material from "../assets/icons/material-ui.png";
import nodejs from "../assets/icons/nodejs.png";
import expressjs from "../assets/icons/express.png";
import mongoDB from "../assets/icons/mongoDB.png";

export function IconHTML5() {
  return (
    <li>
      <FontAwesomeIcon
        icon={["fab", "html5"]}
        alt="Icon: up to date HTML5"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconCSS3() {
  return (
    <li>
      <FontAwesomeIcon
        icon={["fab", "css3"]}
        alt="Icon: Styled with CSS3"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconSASS() {
  return (
    <li>
      <FontAwesomeIcon
        icon={["fab", "sass"]}
        alt="Icon: Styles Compiled with SCSS"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconJS() {
  return (
    <li>
      <FontAwesomeIcon
        icon={["fab", "js"]}
        alt="Icon: Built with JavaScript"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconJQUERY() {
  return (
    <li>
      <img
        src={jQueryIcon}
        alt="Icon: Built with jQuery"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconRESPONSIVE() {
  return (
    <li>
      <img
        src={responsiveIcon}
        alt="Icon: Mobile-First Responsive Design"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconGITHUB() {
  return (
    <li>
      <FontAwesomeIcon
        icon={["fab", "github"]}
        alt="Icon: HTML5"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconAPI() {
  return (
    <li>
      <img
        src={apiIcon}
        alt="Icon: API - Application Programming Interface"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconREACT() {
  return (
    <li>
      <FontAwesomeIcon
        icon={["fab", "react"]}
        alt="Icon: Powered by REACT"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconNODE() {
  return (
    <li>
      <img
        src={nodejs}
        alt="Icon: Node.JS"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconEXPRESS() {
  return (
    <li>
      <img
        src={expressjs}
        alt="Icon: Express.JS"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconMONGODB() {
  return (
    <li>
      <img
        src={mongoDB}
        alt="Icon: MongoDB"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconMATERIAL() {
  return (
    <li>
      <img
        src={material}
        alt="Icon: Styled with material-ui"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}

export function IconFIREBASE() {
  return (
    <li>
      <img
        src={firebaseIcon}
        alt="Icon: Firebase Database"
        mask={["fas", "circle"]}
        transform="grow-7 left-1.5 up-2.2"
        fixedWidth
      />
    </li>
  );
}
