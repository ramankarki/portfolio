import React, { Component } from "react";

import "./Projects.scss";
import liveIcon from "./img/internet_icon.svg";
import githubIcon from "./img/github_icon.svg";
import chatAppSS from "./img/chat_app.png";
import folderListAppSS from "./img/folder_list_app.png";
import weatherAppSS from "./img/weather_app.png";
import jobSearchSS from "./img/job_search_app.png";
import reactIcon from "./img/react.svg";
import reduxIcon from "./img/redux.svg";
import bootstrapIcon from "./img/bootstrap.svg";
import sassIcon from "./img/sass.svg";
import nodeIcon from "./img/node.svg";
import mongodbIcon from "./img/mongodb.svg";
import htmlIcon from "./img/html.svg";
import cssIcon from "./img/css.svg";
import jsIcon from "./img/js.svg";

export default class index extends Component {
  render() {
    return (
      <section className="projects" id="projects">
        <div className="projects__heading">
          <h2>My Projects</h2>
          <p>I build while learning</p>
        </div>

        <div className="projects__cardsContainer">
          <article className="card">
            <img
              className="card__projectSS"
              src={chatAppSS}
              alt="chat app screen shot"
            />
            <div className="card__content">
              <h3 className="card__heading">Chat App</h3>
              <p className="card__subheading">Featured project</p>
              <p className="card__desc">
                A real time chat app with client side rendering with react and
                redux. It has API on backend build with node, express, mongodb,
                mongoose with authentication and authorization. It has all the
                basic features to use as a real time chatting app.
              </p>
              <img
                className="card__techIcon"
                src={reactIcon}
                alt="react icon"
              />
              <img
                className="card__techIcon"
                src={reduxIcon}
                alt="redux icon"
              />
              <img
                className="card__techIcon"
                src={bootstrapIcon}
                alt="bootstrap icon"
              />
              <img className="card__techIcon" src={sassIcon} alt="sass icon" />
              <img className="card__techIcon" src={nodeIcon} alt="node icon" />
              <img
                className="card__techIcon"
                src={mongodbIcon}
                alt="mongodb icon"
              />
              <span>real time</span>
              <div className="card__button">
                <a
                  href="https://raman-chatapp.netlify.app/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={liveIcon} alt="live on internet icon" /> See live
                </a>
                <a
                  href="https://github.com/ramankarki/chat-app-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="github logo" />
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <img
              className="card__projectSS"
              src={folderListAppSS}
              alt="folder list app screen shot"
            />
            <div className="card__content">
              <h3 className="card__heading">Folder List App</h3>
              <p className="card__subheading">Featured project</p>
              <p className="card__desc">
                A web app almost like todo-list app but with extended features.
                It can be used to keep our todo list separately inside different
                folders like keeping our files in different directories.
              </p>
              <img
                className="card__techIcon"
                src={reactIcon}
                alt="react icon"
              />
              <img
                className="card__techIcon"
                src={reduxIcon}
                alt="redux icon"
              />
              <img
                className="card__techIcon"
                src={bootstrapIcon}
                alt="bootstrap icon"
              />
              <img className="card__techIcon" src={sassIcon} alt="sass icon" />
              <img className="card__techIcon" src={nodeIcon} alt="node icon" />
              <img
                className="card__techIcon"
                src={mongodbIcon}
                alt="mongodb icon"
              />
              <div className="card__button">
                <a
                  href="https://folder-list.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={liveIcon} alt="live on internet icon" /> See live
                </a>
                <a
                  href="https://github.com/ramankarki/folder-list-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="github logo" />
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <img
              className="card__projectSS"
              src={weatherAppSS}
              alt="weather app screen shot"
            />
            <div className="card__content">
              <h3 className="card__heading">Weather App</h3>
              <p className="card__subheading">Featured project</p>
              <p className="card__desc">
                A simple weather app for getting weather info for current and
                upcoming 5 days with searching feature for more than 200,000
                cities.
              </p>
              <img className="card__techIcon" src={htmlIcon} alt="html icon" />
              <img className="card__techIcon" src={cssIcon} alt="css icon" />
              <img className="card__techIcon" src={jsIcon} alt="js icon" />
              <span> API</span>
              <div className="card__button">
                <a
                  href="https://ramankarki.github.io/weather-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={liveIcon} alt="live on internet icon" /> See live
                </a>
                <a
                  href="https://github.com/ramankarki/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="github logo" />
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <img
              className="card__projectSS"
              src={jobSearchSS}
              alt="search jobs app screen shot"
            />
            <div className="card__content">
              <h3 className="card__heading">Search Jobs App</h3>
              <p className="card__subheading">Featured project</p>
              <p className="card__desc">
                A simple app that uses github API to search for available jobs
                in given location and gives description about the job and how to
                apply.
              </p>
              <img
                className="card__techIcon"
                src={reactIcon}
                alt="react icon"
              />
              <img className="card__techIcon" src={sassIcon} alt="sass icon" />
              <span> API</span>
              <div className="card__button">
                <a
                  href="https://githubjob-search.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={liveIcon} alt="live on internet icon" /> See live
                </a>
                <a
                  href="https://github.com/ramankarki/job-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="github logo" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
