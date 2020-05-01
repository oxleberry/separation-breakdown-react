import React, { Component } from 'react';

class Overview extends Component {

  render() {
    return (
      <section>
        <h2>OVERVIEW</h2>
        <div className="wrap">
          <div className="screenprint">
            <div className="inkGroup ink-button-list">
                <button className="darkText overview-btn color-5">all</button>
                <button className="darkText overview-btn color-1">ub</button>
                <button className="darkText overview-btn color-2">7532</button>
                <button className="darkText overview-btn color-3">468</button>
                <button className="darkText overview-btn color-4">174</button>
                <button className="darkText overview-btn color-5">wht</button>
            </div>
            <div className="artGroup">
              <div className="aBefore"><div className="all aAll"></div></div>
              <div className="aAfter"><div className="all a1"></div></div>
              <div className="aAfter"><div className="all a2"></div></div>
              <div className="aAfter"><div className="all a3"></div></div>
              <div className="aAfter"><div className="all a4"></div></div>
              <div className="aAfter"><div className="all a5"></div></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;
