import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bitmap from '../components/Bitmap';

class BitmapList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  eachScreen(screen, i) {
    return (
      <Bitmap 
        key={i} 
        screen={screen}>
      </Bitmap>
    )
  }

  render() {
    let eachScreen = this.props.buttons.map(this.eachScreen);

    return (
      <div className="bitmapGroup">
        <div className="bBefore">
          {eachScreen}
          <div className="bitmap bAll"></div>
        </div>
        <div className="bAfter">
          <div className="bitmap"></div>
        </div>
      </div>
    )
  }
}

// // Type Checking
BitmapList.propTypes = { 
  buttons:PropTypes.array
}

export default BitmapList;
