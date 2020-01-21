import React, { Component } from 'react';
import './App.css';
import Autocomplete from './Autocomplete'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
  };

  renderInputBox = () => {
    const { expanded } = this.state; 
    this.setState({
      expanded: !expanded,
    });
  };

  render() {
    const { expanded } = this.state; 
    let className = 'slider-button';
    if (expanded) {
      className = 'slider-button-transition';
    }
    return(
      <div className="slider">
        <button className={className} onClick={() => this.renderInputBox()}>Quote in 60 Seconds</button>
        {expanded && (<Autocomplete />)}
      </div>
    );
  }
}

export default App;
