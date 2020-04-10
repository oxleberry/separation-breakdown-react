import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> PRINTED ONESIE </h2>
      <div className="wrap">
        <div className="screenprint">
          <div className="teeGroup">
            <div className="tBefore">
            <p>Design from the De Young Museum. <br />
            Color Separations by Oxleberry.</p>
            </div>
            <div className="tAfter"><div className="t0"></div></div>
          </div>
        </div>
      </div>

      <h2> SCREENPRINT BREAKDOWN</h2>
      <div className="wrap">
        <div className="screenprint">
          <div className="inkGroup">
              <button className="inkText ink i1" id="p1"> ub </button>
              <button className="inkText ink i2" id="p2"> 7532 </button>
              <button className="inkText ink i3" id="p3"> 468 </button>
              <button className="inkText ink i4" id="p4"> 174 </button>
              <button className="inkText ink i5" id="p5"> wht </button>
              <button className="ink reset" id="pReset"> reset </button>	
          </div>
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
  );
}

export default App;
