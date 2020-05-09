import React, { Component } from 'react';

class Overview extends Component {

  render() {
    return (
      <section className="overview">
        <h2>OVERVIEW</h2>
        <div className="shirt-wrapper">
          <div className="ink-button-list">
              {/* TODO: move state into App.js to pull ink names dymanically
              // (this.state.buttons[0].name) */}
              <button className="darkText overview-btn color-5">all</button>
              <button className="darkText overview-btn color-1">ub</button>
              <button className="darkText overview-btn color-2">7532</button>
              <button className="darkText overview-btn color-3">468</button>
              <button className="darkText overview-btn color-4">174</button>
              <button className="darkText overview-btn color-5">wht</button>
          </div>
          <div className="overview-image-list">
            <div className="img-container"><div className="img-wrapper img-all"></div></div>
            <div className="img-container"><div className="img-wrapper img1"></div></div>
            <div className="img-container"><div className="img-wrapper img2"></div></div>
            <div className="img-container"><div className="img-wrapper img3"></div></div>
            <div className="img-container"><div className="img-wrapper img4"></div></div>
            <div className="img-container"><div className="img-wrapper img5"></div></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;
