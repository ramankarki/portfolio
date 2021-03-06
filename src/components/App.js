import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
