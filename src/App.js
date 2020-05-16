import React, { Component } from 'react';
import Intro from './components/Intro';
import SideBySide from './components/SideBySide';
import Overview from './components/Overview';
import './styles/main.scss';

// App Component Architecture:
//
//                      index
//                        |
//                        |
//                   - - App - - -
//                 /      |         \
//               /        |           \
//            Intro   SideBySide   Overview
//                        |
//                    _ _ | _ _ _
//                  /             \
//                 /               \
//          InkButtonList     ScreenImageList    -- (hold 2 styles to control the images displayed)
//                 |                |                 • print-image-list (screenprint breakdown view)
//                 |                |                 • bitmap-image-list (halftone closeup view)
//            InkButton        ScreenImage


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          id: 1,
          name: 'ub',
          inkColor: 'color-1',
          labelColor: 'darkText',
          isPressed: false,
          active: '',
          origOrder: '1',
          screenOrder: '',
          screenAnimation: ''
        },
        {
          id: 2,
          name: '7532',
          inkColor: 'color-2',
          labelColor: 'darkText',
          isPressed: false,
          active: '',
          origOrder: '2',
          screenOrder: '',
          screenAnimation: ''
        },
        {
          id: 3,
          name: '468',
          inkColor: 'color-3',
          labelColor: 'darkText',
          isPressed: false,
          active: '',
          origOrder: '3',
          screenOrder: '',
          screenAnimation: ''
        },
        {
          id: 4,
          name: '174',
          inkColor: 'color-4',
          labelColor: 'darkText',
          isPressed: false,
          active: '',
          origOrder: '4',
          screenOrder: '',
          screenAnimation: ''
        },
        {
          id: 5,
          name: 'wht',
          inkColor: 'color-5',
          labelColor: 'darkText',
          isPressed: false,
          active: '',
          origOrder: '5',
          screenOrder: '',
          screenAnimation: ''
        },
        {
          id: 'reset',
          name: 'reset',
          inkColor: 'color-reset',
          labelColor: 'resetText',
          isPressed: false,
          active: '',
          origOrder: '',
          screenOrder: '',
          screenAnimation: ''
        }
      ],
      reset: false,
      countPos: 1
    }
  }

  btnClickHandler = (id) => {
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      if (button.id === id) {
        if (button.isPressed === false) {
          button.isPressed = true;
          button.active = 'active';
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
      button.active = '';
      button.screenOrder = '';
      return button;
    }) });
  }

  // Delays the buttons being reset,
  // until after the animation is complete.
  delayClearOrder = () => {
    setTimeout(() => {
      this.clearOrder();
    }, 1530);
  }

  // screenOrder: Laysdown the sreenprint/bitmap images in the order
  // that the user presses down the buttons.
  // First one on the bottom, last one on the top.
  screenOrderHandler = (screen) => {
    let currentCount = this.state.countPos;
    this.setState({ buttons: [...this.state.buttons].map((button) => {
      if (button.id === currentCount) {
        button.screenOrder = screen;
        button.screenAnimation = 'slideRT';
      }
      return button;
    }) });
    this.setState({countPos: currentCount + 1});
  }

  render() {
    return (
      <div className="sep-breakdown-app">
        <Intro />
        <SideBySide
          buttons={this.state.buttons}
          reset={this.state.reset}
          clickHandler={this.btnClickHandler} />
        <Overview buttons={this.state.buttons} />
      </div>
    )
  }
}

export default App;
