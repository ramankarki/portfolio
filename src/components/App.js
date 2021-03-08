import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HomePage from "./HomePage";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
