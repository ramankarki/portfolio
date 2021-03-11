import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HomePage from "./HomePage";
import About from "./About";
import MyLocation from "./MyLocation";
import "./App.scss";
import scrollDownIcon from "./scroll-down.svg";

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
        <MyLocation />
      </div>
    );
  }
}

export default App;
