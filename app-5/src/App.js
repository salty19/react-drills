import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image" 

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image url={"https://www.channelfutures.com/files/2009/06/channelweb-channelinsider-cat-fight_0.jpg"} />
      </div>
    )
  }
}

export default App;
