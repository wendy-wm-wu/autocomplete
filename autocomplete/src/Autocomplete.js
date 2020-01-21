import React, { Component } from 'react';
import './App.css';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: 0, //location of currentlly selected item in filteredOptions 
      filteredOptions: [],
      showOptions: false,
      input: '', 
    }
  };

  onChange = e => {
    const { options } = this.props;
    const userInput = e.target.value;

    const filteredOptions = options.filter((option) => {
      return option.toLowerCase().indexOf(userInput.toLowerCase()) > -1; 
    });
    
    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      input: e.target.value,
    });

  };

  onClick = e => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      input: e.target.innerText,
    });
  };

  onKeyDown = e => {
    const { activeOption, filteredOptions } = this.state;
    if (e.keyCode === 13) { //enter
      this.setState({
        activeOption: 0,
        showOptions: false,
        input: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {  //up
      if (activeOption === 0) return; 
      this.setState({
        activeOption: activeOption - 1,
      });
    } else if (e.keyCode === 40) {   //down
      if (activeOption === filteredOptions.length - 1) return; 
      this.setState({
        activeOption: activeOption + 1,
      });
    };
  };

  render() {
    const { activeOption, filteredOptions, showOptions, input } = this.state; 
    const { onChange, onClick, onKeyDown } = this; 
    let optionList; 
    if (showOptions && input) {
      if (filteredOptions.length > 0) {
        optionList = (
        <ul className="filtered-list">
          {filteredOptions.map((option, index) => {
            let className;
            if (index === activeOption) {
              className = 'option-active';
            }
            return (
              <li className={className} key={index} onClick={onClick} >{option}</li>
            )
           })
          }
        </ul>
        )
      } else {
        optionList = (
          <div className="no-options">
            <em>No options!</em>
          </div>
        )
      }
    } 

    return(
      <div>
        <input type="text" className="input-box" placeholder="What's your home address?" onChange={onChange} onKeyDown={onKeyDown} value={input}></input>
        {optionList}
      </div>
    );
  }
}

export default Autocomplete; 