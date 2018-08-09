import React, { Component } from 'react';
import './FramerateSelector.css';

import Framerate from './Framerate/Framerate'

class FramerateSelector extends Component {
  render() {
    let framerates = [23.98, 24, 25, 29.97, 30, 50, 59.94, 60].map((fr, i) => {
      return <Framerate key={i} value={fr} handleFramerateClick={this.props.handleFramerateClick.bind(this, fr)}/>
    });

    return (
      <div>
        {framerates}
      </div>
    );
  }
}

export default FramerateSelector;
