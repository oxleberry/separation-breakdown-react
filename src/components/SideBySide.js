import React, { Component } from 'react';
import InkButtonList from '../components/InkButtonList';
import ScreenImageList from './ScreenImageList';

class SideBySide extends Component {

  render() {
    return (
      <div>
        <section className="screenprint-container">
          <h2> SCREENPRINT BREAKDOWN</h2>
          <div className="shirt-wrapper">
            <InkButtonList buttons={this.props.buttons} reset={this.props.reset} clickHandler={this.props.clickHandler}/>
            <ScreenImageList styleName="print-image-list" buttons={this.props.buttons} />
          </div>
        </section>
        <section className="halftone-container">
          <h2> HALFTONE CLOSEUP </h2>
          <div className="shirt-wrapper">
            <InkButtonList buttons={this.props.buttons} reset={this.props.reset} clickHandler={this.props.clickHandler}/>
            <ScreenImageList styleName="bitmap-image-list" buttons={this.props.buttons} />
          </div>
        </section>
      </div>
    )
  }
}

export default SideBySide;
