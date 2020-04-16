import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Screen extends Component {

  render() {
    const { origOrder, screenOrder, screenAnimation } = this.props.screen;
    return (
      <div className={`print order_p${origOrder} p${screenOrder} ${screenAnimation}`}></div>
    )
  }
}

// Type Checking
Screen.propTypes = { 
  screen:PropTypes.object
}

export default Screen;
