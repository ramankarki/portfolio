import React, { Component } from "react";

import "./HomePage.scss";
import avatar from "../homepage_avatar.jpg";

class index extends Component {
  render() {
    return (
      <section className="homepage">
        <picture className="homepage__avatar">
          <img src={avatar} alt="my avatar" />
        </picture>
        <div className="homepage__text heroText">
          <h1 className="heroText__heading">I'm Raman Karki</h1>
          <h2 className="heroText__subheading">Full stack web developer</h2>
          <p className="heroText__desc">
            I build full stack web apps with <span>MERN</span> stack
          </p>
          <div className="heroText__callToAction">
            <button>Hire me</button>
            <p>or lets build a great project together</p>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
