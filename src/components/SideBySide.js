
import React, { Component } from 'react';
import InkButtonList from '../components/InkButtonList';

class SideBySide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        { 
          id: 'p1', 
          name: 'ub',
          color: 'i1',
          labelColor: 'inkText',
          isPressed: false
        },
        { 
          id: 'p2', 
          name: '7532',
          color: 'i2',
          labelColor: 'inkText',
          isPressed: false
        },
        { 
          id: 'p3', 
          name: '468',
          color: 'i3',
          labelColor: 'inkText',
          isPressed: false
        },
        { 
          id: 'p4', 
          name: '174',
          color: 'i4',
          labelColor: 'inkText',
          isPressed: false
        },
        { 
          id: 'p5', 
          name: 'wht',
          color: 'i5',
          labelColor: 'inkText',
          isPressed: false
        },
        { 
          id: 'pReset', 
          name: 'reset',
          color: 'reset',
          labelColor: '',
          isPressed: false
        }
      ],
      string: "string",
      object: {
        first: 'first', 
        second: 'second',
        third: 'third'
      }
    }
  }

  // Toggle Ink Button
  clickHandler = (id) => {

    // Spread Operator test
    // console.log(this.state.buttons);
    // console.log(...this.state.buttons);   
    // console.log([...this.state.buttons]);
    // console.log(this.state.string);
    // console.log(...this.state.string);
    // console.log(this.state.object);
    // console.log({...this.state.object});


    // Spread Operator makes a copy of state
    // since you don't want to mutate the state with itself
    // Version #1
    // let updateButtonStatus;
    // updateButtonStatus = [...this.state.buttons].map((button, i) => {
    //   if (button.id === id) {
    //     button.isPressed = !button.isPressed;
    //     button.name = "Spork";
    //   }
    //   return button;
    // });
    // this.setState({ buttons: updateButtonStatus});

    // Version #2
    this.setState({ buttons: [...this.state.buttons].map((button, i) => {
      if (button.id === id) {
        button.isPressed = !button.isPressed;
        button.name = "Spork";
      }
      return button;
    }) });

    console.log(...this.state.buttons); 
  }

  
  render() {
    return (
      <div>
        <h2> SCREENPRINT BREAKDOWN</h2>
        <div className="wrap">
          <div className="screenprint">
            <InkButtonList buttons={this.state.buttons} clickHandler={this.clickHandler}/>
            <div className="printGroup">
              <div className="pBefore">
                <div className="print order_p1"></div>
                <div className="print order_p2"></div>
                <div className="print order_p3"></div>
                <div className="print order_p4"></div>
                <div className="print order_p5"></div>
                <div className="print pAll"></div>											
              </div>
              <div className="pAfter">
                <div className="print"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBySide;
