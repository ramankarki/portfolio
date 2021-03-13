import React, { Component } from "react";

import "./About.scss";
import avatar from "./about_avatar.jpg";
import illustration from "./about_illustration.svg";

export default class index extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h2 className="about__heading">About me</h2>
        <div className="about__content">
          <picture className="about__avatar">
            <img src={avatar} alt="about avatar" />
          </picture>
          <div className="about__desc">
            <p>
              I am currently at high school and I love to explore new
              technologies.
            </p>
            <img src={illustration} alt="high school degree icon" />
          </div>
        </div>
      </section>
    );
  }
}
