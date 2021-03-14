import React, { Component } from "react";

import "./MyTools.scss";
import webDesign from "./webdesign.svg";
import frontend from "./frontend.svg";
import backend from "./backend.svg";

class index extends Component {
  render() {
    return (
      <section className="myTools" id="myTools">
        <div className="myTools__heading">
          <h2>My Tools</h2>
          <p>I use most frequently for my projects</p>
        </div>
        <div className="myTools__table toolsTable">
          <section className="toolsTable__webDesign">
            <img src={webDesign} alt="icon for responsive layout web design" />
            <h3>Web Design</h3>
            <p>Figma</p>
            <p>AdobeXD</p>
            <p>Inkscape</p>
            <p>Diagrams</p>
            <p>Pen & Paper</p>
            <p>Dribbble</p>
          </section>
          <section className="toolsTable__frontend">
            <img src={frontend} alt="icon for frontend coding" />
            <h3>Frontend</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Bootstrap</p>
            <p>Sass</p>
            <p>React</p>
            <p>Redux</p>
            <p>React & Redux Dev extensions</p>
          </section>
          <section className="toolsTable__backend">
            <img src={backend} alt="icon for backend coding" />
            <h3>Backend</h3>
            <p>Node</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>Postman</p>
            <p>npm scripts</p>
            <p>Terminal</p>
          </section>
          <section className="toolsTable__someOthers">
            <h3>Some others</h3>
            <p>VScode, Codepen, Git, Github, Bitbucket, Python, Ubuntu</p>
          </section>
        </div>
      </section>
    );
  }
}

export default index;
