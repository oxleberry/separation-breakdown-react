import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Screen extends Component {

  render() {
    const { origOrder, screenOrder, screenAnimation } = this.props.screen;
    return (
      <div className={`img-wrapper order_screen${origOrder} screen-img${screenOrder} ${screenAnimation}`}></div>
    )
  }
}

// Type Checking
Screen.propTypes = {
  screen:PropTypes.object
}


class ScreenList extends Component {
  eachScreen(screen, i) {
    return (
      <Screen
        key={i}
        screen={screen}>
      </Screen>
    )
  }

  render() {
    let eachScreen = this.props.buttons.map(this.eachScreen);

    return (
      <div className="screen-list">
        <div className="sidebyside-container">
          <div className="img-wrapper screen-img-all"></div>
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
ScreenList.propTypes = {
  buttons:PropTypes.array
}

export default ScreenList;
