import React, { Component } from "react";

import "./HomePage.scss";
import avatar from "./homepage_avatar.jpg";

class index extends Component {
  render() {
    return (
      <section className="homepage" id="homepage">
        <picture className="homepage__avatar">
          <img src={avatar} alt="my avatar" />
        </picture>
        <div className="homepage__text heroText">
          <h1 className="heroText__heading">I'm Raman Karki</h1>
          <h2 className="heroText__subheading">Full stack web developer</h2>
          <p className="heroText__desc">
            I build full-stack web apps with the <span>MERN</span> stack. <br />
            However, I'm open to learn new and exciting technologies that can
            work best for my projects.
          </p>
          <div className="heroText__callToAction">
            <a href="#contact">Hire me</a>
            <p>or let's build a great project together</p>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
