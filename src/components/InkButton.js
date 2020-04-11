import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InkButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPressed: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    let pressed = this.state.isPressed;
    this.setState({isPressed: !pressed})
  }

  buttonPressed() {
    return (
      <button className={`${this.props.labelColor} ink ${this.props.color} active`} id={this.props.id} onClick={this.clickHandler}> 
        {this.props.name} 
      </button>
    )
  }

  buttonDisplayed() {
    return (
      <button className={`${this.props.labelColor} ink ${this.props.color}`} id={this.props.id} onClick={this.clickHandler}> 
        {this.props.name} 
      </button>
    )
  }

  render() {
    if (this.state.isPressed) {
      return this.buttonPressed();
    } else {
      return this.buttonDisplayed();
    }
  }
}

// Type Checking
InkButton.propTypes = { 
  name:PropTypes.string,
  color:PropTypes.string,
  labelColor:PropTypes.string,
  id:PropTypes.string
}

// Set Default Props
InkButton.defaultProps = {
  name: 'empty',
  color: 'reset',
  labelColor: 'inkText',
  id: ''
}

export default InkButton;
