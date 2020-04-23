import React, { Component } from 'react';

class Overview extends Component {

  render() {
    return (
      <section>
        <h2>OVERVIEW</h2>
        <div className="wrap">
          <div className="screenprint">
            <div className="inkGroup button-list">
                <button className="darkText ink-overview i0">all</button>
                <button className="darkText ink-overview i1">ub</button>
                <button className="darkText ink-overview i2">7532</button>
                <button className="darkText ink-overview i3">468</button>
                <button className="darkText ink-overview i4">174</button>
                <button className="darkText ink-overview i5">wht</button>
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
