import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InkButton extends Component {

  buttonPressed() {
    // Destructuring
    const { id, name, color, labelColor } = this.props.button;
    return (
      <button 
        key={id}
        className={`${labelColor} ink ${color} active`} 
        id={id} 
        onClick={this.props.clickHandler.bind(this, id)}> 
          {name} 
      </button>
    )
  }

  buttonUnpressed() {
    // Destructuring
    const { id, name, color, labelColor } = this.props.button;
    return (
      <button 
        key={id}
        className={`${labelColor} ink ${color}`} 
        id={id} 
        onClick={this.props.clickHandler.bind(this, id)}> 
          {name} 
      </button>
    )
  }

  render() {
    if (this.props.button.isPressed) {
      return this.buttonPressed();
    } else {
      return this.buttonUnpressed();
    }
  }
}

// Type Checking
InkButton.propTypes = { 
  button:PropTypes.object,
}

export default InkButton;
