import React, { Component } from 'react';
import './App.css';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return(
      <div>
        <input type="text" className="input-box" placeholder="What's your home address?"></input>
      </div>
    );
  }
}

export default Autocomplete; 