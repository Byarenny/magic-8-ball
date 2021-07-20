import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["Ask again", "No", "It is certain", "Very doubtful", "Certainly!", "Signs point to yes"],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    this.setState({ selectedAnswer: answerArray[Math.floor(Math.random()*6)]})
  }

  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input
          className="inputBox"
          type="text"
        />
        <br />
        <button id="button" onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p id="response">{ this.state.selectedAnswer }</p>
      </>
    )
  }
}

export default App
