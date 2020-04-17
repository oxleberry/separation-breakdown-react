import React, { Component } from 'react';

class Overview extends Component {

  render() {
    return (
      <div>
        <h2>OVERVIEW</h2>
        <div class="wrap">
          <div class="screenprint">
            <div class="inkGroup">
                <button class="darkText inkAll i0">all</button>
                <button class="darkText inkAll i1">ub</button>
                <button class="darkText inkAll i2">7532</button>
                <button class="darkText inkAll i3">468</button>
                <button class="darkText inkAll i4">174</button>
                <button class="darkText inkAll i5">wht</button>
            </div>
            <div class="artGroup">
              <div class="aBefore"><div class="all aAll"></div></div>
              <div class="aAfter"><div class="all a1"></div></div>
              <div class="aAfter"><div class="all a2"></div></div>
              <div class="aAfter"><div class="all a3"></div></div>
              <div class="aAfter"><div class="all a4"></div></div>
              <div class="aAfter"><div class="all a5"></div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;
