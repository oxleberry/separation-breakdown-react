import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InkButton from '../components/InkButton';

class InkButtonList extends Component {
  
  render() {
    return (
      <div className="button-list">
        {this.props.buttons.map((button, i) => (
          <InkButton key={i} button={button} clickHandler={this.props.clickHandler}/>
        ))}
      </div>
    )
  }
}

// Type Checking
InkButton.propTypes = { 
  buttons:PropTypes.array
}

export default InkButtonList;
