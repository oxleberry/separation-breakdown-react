import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InkButton from '../components/InkButton';
import '../styles/inkButtonList.scss';

class InkButtonList extends Component {
  
  render() {
    return (
      this.props.buttons.map((button, i) => (
        <InkButton key={i} button={button} clickHandler={this.props.clickHandler}/>
      ))
    )
  }
}

// Type Checking
InkButton.propTypes = { 
  buttons:PropTypes.array
}

export default InkButtonList;
