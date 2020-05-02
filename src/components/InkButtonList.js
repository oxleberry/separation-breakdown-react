import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InkButton extends Component {
  render() {
    // Destructuring
    const { id, name, inkColor, labelColor, active } = this.props.button;
    return (
      <button
        key={id}
        className={`${labelColor} btn ${inkColor} ${active}`}
        id={id}
        onClick={this.props.clickHandler.bind(this, id)}>
          {name}
      </button>
    )
  }
}

// Type Checking
InkButton.propTypes = {
  button:PropTypes.object,
}


class InkButtonList extends Component {

  render() {
    return (
      <div className="ink-button-list">
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
