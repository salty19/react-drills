import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      userInput: ''
    }
  }

  handlechange(val) {
    this.setState({ userInput: val})
  }

  render(){
    return (
      <div>
        <input className="userInput" onChange={ (e) => this.handleChange (e.target.value) } />
        <span className="results"></span>
      </div>
    )
  }
}

export default App;
