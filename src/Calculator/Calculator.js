import React, { Component } from 'react';
import './Calculator.css';
import FramerateSelector from './FramerateSelector/FramerateSelector';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      framerate: 25
    };
  }

  changeFramerate = (fr, e) => {
      console.log("Framerate changed!")
      console.log(fr)
      this.setState({
        framerate: fr
      });
  }

  render() {
    return (
      <div>
        Welcome!
        <FramerateSelector handleFramerateClick={this.changeFramerate}/>
        Framerate is: {this.state.framerate}
      </div>
    );
  }
}

export default Calculator;
