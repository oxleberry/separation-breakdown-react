import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bitmap extends Component {
  render() {
    const { origOrder, screenOrder, screenAnimation } = this.props.screen;
    return (
      <div className={`img-wrapper position${origOrder} img${screenOrder} ${screenAnimation}`}></div>
    )
  }
}

// Type Checking
Bitmap.propTypes = {
  screen:PropTypes.object
}


class BitmapList extends Component {
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
      <div className="bitmap-list">
        <div className="sidebyside-container">
          <div className="img-wrapper img-all"></div>
          {eachScreen}
        </div>
        <div className="sidebyside-container">
          <div className="img-wrapper"></div>
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
