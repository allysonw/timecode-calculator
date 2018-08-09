import React, { Component } from 'react';
import './Framerate.css';

class Framerate extends Component {
  render() {
    return (
      <span className="framerate">
        {this.props.value}
      </span>
    );
  }
}

export default Framerate;
