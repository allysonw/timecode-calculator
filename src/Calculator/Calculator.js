import React, { Component } from 'react';
import './Calculator.css';
import FramerateSelector from './FramerateSelector/FramerateSelector';


class Calculator extends Component {
  render() {
    return (
      <div>
        Welcome!
        <FramerateSelector />
      </div>
    );
  }
}

export default Calculator;
