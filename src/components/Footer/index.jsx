import React, { Component } from "react";

import "./Footer.scss";
import githubIcon from "./img/github.svg";
import facebookIcon from "./img/facebook.svg";
import instagramIcon from "./img/instagram.svg";
import emailIcon from "./img/email.svg";

class index extends Component {
  render() {
    return (
      <div className="footer">
        <p>© ramankarki.com.np - All Rights Reserved.</p>
        <div className="footer__links">
          <a
            href="https://github.com/ramankarki"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github logo" />
          </a>

          <a
            href="https://facebook.com/ramankarki0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="facebook logo" />
          </a>

          <a
            href="https://www.instagram.com/ramankarki9/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="instagram logo" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ramankarki40@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={emailIcon} alt="email icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default index;
