import React, { Component } from 'react';
import InkButton from '../components/InkButton';

let initInksData = [
  {name: 'ub', color: 'i1', labelColor: "inkText", id: "p1"},
  {name: '7532', color: 'i2', labelColor: "inkText", id: "p2"},
  {name: '468', color: 'i3', labelColor: "inkText", id: "p3"},
  {name: '174', color: 'i4', labelColor: "inkText", id: "p4"},
  {name: 'white', color: 'i5', labelColor: "inkText", id: "p5"},
  {name: 'reset', color: 'reset', labelColor: "", id: "pReset"}
]

class InkButtonList extends Component {
  eachInkButton(data, i) {
    return (
      <InkButton 
        key={i} 
        name={data.name} 
        color={data.color} 
        labelColor={data.labelColor} 
        id={data.id}>
      </InkButton>
    )
  }

  render() {
    // Iterating from the init Data.
    let eachInkButton = initInksData.map(this.eachInkButton)
    return (
      <div className="inkGroup">
        {eachInkButton}
      </div>
    )
  }
}

export default InkButtonList;
