import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Screen extends Component {

  slideRight() {
    const { origOrder, screenOrder } = this.props.screen;
    return (
      <div className={`print ${origOrder} ${screenOrder} slideRT`}></div>
    )
 }

  screenDisplay() {
    const { origOrder, screenOrder } = this.props.screen;
    return (
      <div className={`print ${origOrder} ${screenOrder}`}></div>
    )
  }

  render() {
    if (this.props.screen.isPressed) {
      return this.slideRight();
    } else {
      return this.screenDisplay();
    }
  }
}

// Type Checking
Screen.propTypes = { 
  screen:PropTypes.object
}

export default Screen;
