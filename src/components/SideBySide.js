import React, { Component } from 'react';
import InkButtonList from '../components/InkButtonList';
import ScreenList from '../components/ScreenList';

class SideBySide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        { 
          id: 'p1', 
          name: 'ub',
          inkColor: 'i1',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p1',
          screenOrder: 'p1'
        },
        { 
          id: 'p2', 
          name: '7532',
          inkColor: 'i2',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p2',
          screenOrder: 'p2'
        },
        { 
          id: 'p3', 
          name: '468',
          inkColor: 'i3',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p3',
          screenOrder: 'p3'
        },
        { 
          id: 'p4', 
          name: '174',
          inkColor: 'i4',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p4',
          screenOrder: 'p4'
        },
        { 
          id: 'p5', 
          name: 'wht',
          inkColor: 'i5',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p5',
          screenOrder: 'p5'
        },
        { 
          id: 'pReset', 
          name: 'reset',
          inkColor: 'reset',
          labelColor: 'lightText',
          isPressed: false,
          origOrder: '',
          screenOrder: ''
        }
      ]
    }
  }

  // Toggle Ink Button
  clickHandler = (id) => {
    this.setState({ buttons: [...this.state.buttons].map((button, i) => {
      if (button.id === id) {
        button.isPressed = !button.isPressed;
        console.log(button.id); 
      }
      return button;
    }) });
  }

  render() {
    return (
      <div>
        <h2> SCREENPRINT BREAKDOWN</h2>
        <div className="wrap">
          <div className="screenprint">
            <InkButtonList buttons={this.state.buttons} clickHandler={this.clickHandler}/>
            <ScreenList buttons={this.state.buttons} />
          </div>
        </div>
      </div>
    )
  }
}

export default SideBySide;
