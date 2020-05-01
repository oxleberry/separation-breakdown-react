import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Screen from '../components/Screen';

class ScreenList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

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
      <div className="printGroup">
        <div className="pBefore">
          {eachScreen}
          <div className="print pAll"></div>
        </div>
        <div className="pAfter">
          <div className="print"></div>
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
