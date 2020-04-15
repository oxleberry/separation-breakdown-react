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
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 'p2', 
          name: '7532',
          inkColor: 'i2',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p2',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 'p3', 
          name: '468',
          inkColor: 'i3',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p3',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 'p4', 
          name: '174',
          inkColor: 'i4',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p4',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 'p5', 
          name: 'wht',
          inkColor: 'i5',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: 'order_p5',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 'pReset', 
          name: 'reset',
          inkColor: 'reset',
          labelColor: 'lightText',
          isPressed: false,
          origOrder: '',
          screenOrder: '',
          screenAnimation: ''
        }
      ],
      reset: false,
      countPos: 1
    }
  }

  clickHandler = (id) => {
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      if (button.id === id) {
        if (button.isPressed === false) {
          button.isPressed = true;
          this.screenOrderHandler(button.id);
        }
        if (button.id === 'pReset'){
          this.setState({reset: true});
          this.resetHandler();
        }
      }
      return button;
    }) });
  }

  resetHandler = () => {
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      button.screenAnimation = 'slideLT';
      return button;
    }) });
    this.delayClearOrder();
    this.setState({reset: false, countPos: 1});
  }

  clearOrder = () => {
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      button.isPressed = false;
      button.screenOrder = '';
      return button;
    }) });
  }

  // delays the buttons being reset, until after the animation is complete.
  delayClearOrder = () => {
    setTimeout(() => { 
      this.clearOrder(); 
    }, 1530);
  }

  screenOrderHandler = (screen) => {    
    let currentCount = this.state.countPos;
    const currentScreenArr = screen.split('');
    const currentPos = currentScreenArr[0] + currentCount;
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      if (button.id === currentPos) {
        button.screenOrder = screen;
        button.screenAnimation = 'slideRT';
      }
      return button;
    }) });
    this.setState({countPos: currentCount + 1});
  }

  render() {
    return (
      <div>
        <h2> SCREENPRINT BREAKDOWN</h2>
        <div className="wrap">
          <div className="screenprint">
            <InkButtonList buttons={this.state.buttons} reset={this.state.reset} clickHandler={this.clickHandler}/>
            <ScreenList buttons={this.state.buttons} />
          </div>
        </div>
      </div>
    )
  }
}

export default SideBySide;
