import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScreenImage extends Component {
  render() {
    const { origOrder, screenOrder, screenAnimation } = this.props.screen;
    return (
      <div className={`img-wrapper position${origOrder} img${screenOrder} ${screenAnimation}`}></div>
    )
  }
}

// Type Checking
ScreenImage.propTypes = {
  screen:PropTypes.object
}


class ScreenImageList extends Component {
  eachScreen(screen, i) {
    return (
      <ScreenImage
        key={i}
        screen={screen}>
      </ScreenImage>
    )
  }

  render() {
    let eachScreen = this.props.buttons.map(this.eachScreen);
    return (
      <div className={this.props.styleName}>
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
ScreenImageList.propTypes = {
  buttons:PropTypes.array
}

export default ScreenImageList;
