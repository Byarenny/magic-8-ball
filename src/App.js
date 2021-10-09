import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [
        "Ask again",
        "No",
        "It is certain",
        "Maybe",
        "Yes",
        "Don't count on it",
      ],
      selectedAnswer: "",
    };
  }

  handleSubmit = () => {
    const { answerArray } = this.state;
    this.setState({
      selectedAnswer: answerArray[Math.floor(Math.random() * 6)],
    });
  };

  render() {
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input className="inputBox" type="text" />
        <br />
        <button id="button" onClick={this.handleSubmit}>
          Ask
        </button>
        <p id="response">{this.state.selectedAnswer}</p>
      </>
    );
  }
}

export default App;
