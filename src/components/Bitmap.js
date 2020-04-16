import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Bitmap extends Component {

  render() {
    const { origOrder, screenOrder, screenAnimation } = this.props.screen;
    return (
      <div className={`bitmap order_b${origOrder} b${screenOrder} ${screenAnimation}`}></div>
    )
  }
}

// Type Checking
Bitmap.propTypes = { 
  screen:PropTypes.object
}

export default Bitmap;
