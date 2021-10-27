import React, { Component } from "react";
import ReactDOM from "react-dom";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 5,
      shaking: false,
    };
    this.toString = this.toString.bind(this);
    this.roll = this.roll.bind(this);
  }

  toString(num) {
    switch (num) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
    }
  }

  roll(e) {
    let number1 = Math.ceil(Math.random() * 6);
    let number2 = Math.ceil(Math.random() * 6);
    this.setState({ shaking: true });
    document.querySelector("#rollBtn").disabled = true;
    document.querySelector("#rollBtn").textContent = "Rolling...";
    setTimeout(() => {
      this.setState({ shaking: false, num1: number1, num2: number2 });
      document.querySelector("#rollBtn").disabled = false;
      document.querySelector("#rollBtn").textContent = "Roll Dice";
    }, 800);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die
            shaking={this.state.shaking}
            num={this.toString(this.state.num1)}
          />
          <Die
            shaking={this.state.shaking}
            num={this.toString(this.state.num2)}
          />
        </div>
        <button
          onClick={this.roll}
          className={
            this.state.shaking
              ? `RollDice-button RollDice-button-shaking`
              : `RollDice-button`
          }
          id="rollBtn"
        >
          Roll Dice
        </button>
      </div>
    );
  }
}

export default RollDice;
