import React, { Component } from 'react';
import InkButtonList from '../components/InkButtonList';
import ScreenList from '../components/ScreenList';
import BitmapList from '../components/BitmapList';
import '../styles/sideBySide.scss';

class SideBySide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        { 
          id: 1, 
          name: 'ub',
          inkColor: 'i1',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: '1',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 2, 
          name: '7532',
          inkColor: 'i2',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: '2',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 3, 
          name: '468',
          inkColor: 'i3',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: '3',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 4, 
          name: '174',
          inkColor: 'i4',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: '4',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 5, 
          name: 'wht',
          inkColor: 'i5',
          labelColor: 'darkText',
          isPressed: false,
          origOrder: '5',
          screenOrder: '',
          screenAnimation: ''
        },
        { 
          id: 'reset', 
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
        if (button.id === 'reset'){
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
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      if (button.id === currentCount) {
        console.log(screen);
        button.screenOrder = screen;
        button.screenAnimation = 'slideRT';
      }
      return button;
    }) });
    this.setState({countPos: currentCount + 1});
  }

  render() {
    return (
      <div className="sideBySide">
        <section>
          <h2> SCREENPRINT BREAKDOWN</h2>
          <div className="wrap">
            <div className="screenprint">
              <InkButtonList buttons={this.state.buttons} reset={this.state.reset} clickHandler={this.clickHandler}/>
              <ScreenList buttons={this.state.buttons} />
            </div>
          </div>
        </section>
        <section>
          <h2> HALFTONE CLOSEUP </h2>
          <div className="wrap">
            <div className="screenprint">
              <InkButtonList buttons={this.state.buttons} reset={this.state.reset} clickHandler={this.clickHandler}/>
              <BitmapList buttons={this.state.buttons} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SideBySide;
