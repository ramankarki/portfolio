import React, { Component } from "react";

import logo from "../logo.png";
import "./Header.scss";

class index extends Component {
  state = { isHamburgurActive: false, hamburgurClass: false };

  setHamburgurState = () =>
    this.setState({
      isHamburgurActive: !this.state.isHamburgurActive,
      hamburgurClass: this.state.isHamburgurActive
        ? "hamburgurBtn"
        : "hamburgurBtn hamburgurBtn-active",
    });

  navClass = () => (this.state.isHamburgurActive ? "nav nav-active" : "nav");

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="logo of my portfolio" />
          <nav className={`header__nav ${this.navClass()}`}>
            <a
              href="#homepage"
              className="nav__links nav__links nav__links-active"
            >
              Home
            </a>
            <a href="#about" className="nav__links">
              About
            </a>
            <a href="#projects" className="nav__links">
              Projects
            </a>
            <a href="#contact" className="nav__links">
              Contact
            </a>
          </nav>
          <div
            onClick={this.setHamburgurState}
            className={`header__hamburgurBtn ${this.state.hamburgurClass}`}
          >
            <div className="hamburgurBtn__one"></div>
            <div className="hamburgurBtn__two"></div>
            <div className="hamburgurBtn__three"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default index;
