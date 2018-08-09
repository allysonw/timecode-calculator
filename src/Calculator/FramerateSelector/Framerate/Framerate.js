import React, { Component } from 'react';
import './Framerate.css';

class Framerate extends Component {
  render() {
    return (
      <span className="framerate" onClick={this.props.handleFramerateClick}>
        {this.props.value}
      </span>
    );
  }
}

export default Framerate;
