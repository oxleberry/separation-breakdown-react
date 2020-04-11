
import React, { Component } from 'react';

class InkButton extends Component {

  clickHandler() {
    console.log('click');
  }

  render() {
    return (
      <button className={`${this.props.labelColor} ink ${this.props.color}`} id={this.props.id} onClick={this.clickHandler}> 
        {this.props.name} 
      </button>
    )
  }
}

export default InkButton;
