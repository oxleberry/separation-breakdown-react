import React, { Component } from 'react';
import InkButton from '../components/InkButton';

class InkButtonList extends Component {

  render() {

    return (
      <div className="inkGroup">
        {/* TODO: refactor "inkText" to labelColor = darkText, or lightText */}
        <InkButton name="ub" color="i1" labelColor="inkText" id="p1" />
        <InkButton name="7532" color="i2" labelColor="inkText" id="p2" />
        <InkButton name="468" color="i3" labelColor="inkText" id="p3" />
        <InkButton name="174" color="i4" labelColor="inkText" id="p4" />
        <InkButton name="wht" color="i5" labelColor="inkText" id="p5" />
        <InkButton name="reset" color="reset" labelColor="" id="pReset" />
      </div>
    )
  }
}

export default InkButtonList;
