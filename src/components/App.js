import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HomePage from "./HomePage";
import About from "./About";
import TwoColumn from "./twoColumn";
import MyTools from "./MyTools";
import Projects from "./Projects";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.scss";
import scrollDownIcon from "./scroll-down.svg";
import locationIcon from "./location_icon.svg";
import projectAvatar from "./project_avatar.jpg";
import fastProjectIcon from "./fast_project_icon.svg";
import learn1 from "./learn_1.png";
import htmlIcon from "./html_icon.svg";
import cssIcon from "./css_icon.svg";
import jsIcon from "./js_icon.svg";
import learn2 from "./learn2.png";
import reactIcon from "./react_icon.svg";
import reduxIcon from "./redux_icon.svg";
import learn3 from "./learn3.png";
import nodeIcon from "./node_icon.svg";
import mongodbIcon from "./mongodb_icon.svg";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />

        <HomePage />

        <div className="scrollDown">
          <span>
            Scroll down <img src={scrollDownIcon} alt="scroll down icon" />
          </span>
        </div>

        <About />

        <TwoColumn>
          <div className="section__content section__content-reverse">
            <picture className="section__picture">
              <iframe
                title="my location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14284.14818995936!2d87.28090247132249!3d26.486751988531697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a4e4e885b%3A0xe1b55cf82fb28f76!2sThulo%20Mill%20Chowk!5e0!3m2!1sen!2snp!4v1615454162698!5m2!1sen!2snp"
                width="600"
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </picture>
            <div className="section__desc">
              <img src={locationIcon} alt="location icon" />
              <p>
                I live in Nepal, Morang, Biratnagar (56613) and I would love to
                work with a good community of developers.
              </p>
            </div>
          </div>
        </TwoColumn>

        <TwoColumn>
          <div className="section__content">
            <picture className="section__picture">
              <img src={projectAvatar} alt="avatar of working on project" />
            </picture>
            <div className="section__desc">
              <img src={fastProjectIcon} alt="location icon" />
              <p>
                In my spare time, I enjoy exploring new technologies, and
                developing projects that can impact and benefit people in a
                positive way.
              </p>
            </div>
          </div>
        </TwoColumn>

        <TwoColumn>
          <div className="section__content section__content-reverse">
            <picture className="section__picture">
              <img src={learn1} alt="avatar of working on project" />
            </picture>
            <div className="section__desc">
              <img src={htmlIcon} alt="location icon" />
              <img src={cssIcon} alt="location icon" />
              <img src={jsIcon} alt="location icon" />
              <p>
                I started my web development journey by learning frontend
                technologies like HTML, CSS, and JavaScript. From there I
                gradually improved my skills by building projects.
              </p>
            </div>
          </div>
        </TwoColumn>

        <TwoColumn>
          <div className="section__content">
            <picture className="section__picture">
              <img src={learn2} alt="avatar of working on project" />
            </picture>
            <div className="section__desc">
              <img src={reactIcon} alt="location icon" />
              <img src={reduxIcon} alt="location icon" />
              <p>
                After some projects, I picked React, Redux and worked with APIs
                to make dynamic client side rendering projects.
              </p>
            </div>
          </div>
        </TwoColumn>

        <TwoColumn>
          <div className="section__content section__content-reverse">
            <picture className="section__picture">
              <img src={learn3} alt="avatar of working on project" />
            </picture>
            <div className="section__desc">
              <img src={reactIcon} alt="location icon" />
              <img src={reduxIcon} alt="location icon" />
              <img src={nodeIcon} alt="location icon" />
              <img src={mongodbIcon} alt="location icon" />
              <p>
                After React, I started learning backend with NodeJS, ExpressJS,
                MongoDB and build my own API to make full stack web apps.
              </p>
            </div>
          </div>
        </TwoColumn>

        <MyTools />

        <Projects />

        <CallToAction />

        <Contact />

        <Footer />
      </div>
    );
  }
}

export default App;
