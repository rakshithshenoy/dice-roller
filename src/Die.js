import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div className={this.props.shaking ? `Die Die-shaking` : `Die`}>
        <i class={`fas fa-dice-${this.props.num} fa-7x Die-icon`}></i>
      </div>
    );
  }
}

export default Die;
