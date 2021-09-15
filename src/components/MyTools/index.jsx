import React, { Component } from 'react';

import './MyTools.scss';
import webDesign from './webdesign.svg';
import frontend from './frontend.svg';
import backend from './backend.svg';
import toolsIcon from './tools_icon.svg';

class index extends Component {
  render() {
    return (
      <section className="myTools" id="myTools">
        <div className="myTools__heading">
          <h2>My Tools</h2>
          <p>
            I use frequently for my projects{' '}
            <img src={toolsIcon} alt="tools icon" />
          </p>
        </div>
        <div className="myTools__table toolsTable">
          <section className="toolsTable__webDesign">
            <img src={webDesign} alt="icon for responsive layout web design" />
            <h3>Web Design</h3>
            <p>Figma</p>
            <p>Inkscape</p>
            <p>Diagrams</p>
            <p>Pen & Paper</p>
          </section>
          <section className="toolsTable__frontend">
            <img src={frontend} alt="icon for frontend coding" />
            <h3>Frontend</h3>
            <p>HTML & CSS</p>
            <p>JavaScript</p>
            <p>Bootstrap</p>
            <p>Sass</p>
            <p>React</p>
            <p>Redux</p>
          </section>
          <section className="toolsTable__backend">
            <img src={backend} alt="icon for backend coding" />
            <h3>Backend</h3>
            <p>NodeJS</p>
            <p>ExpressJS</p>
            <p>MongoDB</p>
            <p>MongooseJS</p>
            <p>Postman (for API testing)</p>
          </section>
          <section className="toolsTable__someOthers">
            <h3>Some other tech I love</h3>
            <p>VScode, Codepen, Git, Github, Bitbucket, Python</p>
          </section>
        </div>
      </section>
    );
  }
}

export default index;
