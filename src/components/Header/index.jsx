import React, { Component } from "react";

import logo from "../logo.png";
import "./Header.scss";

class index extends Component {
  state = {
    isHamburgurActive: false,
    hamburgurClass: false,
    activeNavLink: "homepage",
  };

  setHamburgurState = () =>
    this.setState({
      isHamburgurActive: !this.state.isHamburgurActive,
      hamburgurClass: this.state.isHamburgurActive
        ? "hamburgurBtn"
        : "hamburgurBtn hamburgurBtn-active",
    });

  navClass = () => (this.state.isHamburgurActive ? "nav nav-active" : "nav");

  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 32 && rect.bottom > 0;
  }

  activeLinkClass = (section) =>
    section === this.state.activeNavLink ? "nav__links-active" : "";

  componentDidMount() {
    const homepage = document.querySelector("#homepage");
    const about = document.querySelector("#about");
    const myTools = document.querySelector("#myTools");
    const projects = document.querySelector("#projects");
    const contact = document.querySelector("#contact");

    window.addEventListener("scroll", () => {
      let activeNavLink = this.state.activeNavLink;

      if (this.isInViewport(contact)) {
        activeNavLink = "contact";
      } else if (this.isInViewport(projects)) {
        activeNavLink = "projects";
      } else if (this.isInViewport(myTools)) {
        activeNavLink = "about";
      } else if (this.isInViewport(about)) {
        activeNavLink = "about";
      } else if (this.isInViewport(homepage)) {
        activeNavLink = "homepage";
      }

      this.setState({ activeNavLink });
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="logo of my portfolio" />
          <nav className={`header__nav ${this.navClass()}`}>
            <a
              href="#homepage"
              className={`nav__links ${this.activeLinkClass("homepage")}`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav__links ${this.activeLinkClass("about")}`}
            >
              About
            </a>
            <a
              href="https://ramankarki.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="nav__links"
            >
              Blog
            </a>
            <a
              href="#projects"
              className={`nav__links ${this.activeLinkClass("projects")}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`nav__links ${this.activeLinkClass("contact")}`}
            >
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
