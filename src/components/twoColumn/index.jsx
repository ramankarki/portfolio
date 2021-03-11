import React, { Component } from "react";

import "./twoColumn.scss";

export default class index extends Component {
  render() {
    return <div className="section">{this.props.children}</div>;
  }
}
