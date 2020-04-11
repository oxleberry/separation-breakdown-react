import React from 'react';
import Intro from './components/Intro';
import InkButtonList from './components/InkButtonList';
import './App.css';

function App() {

  return (
    <div className="App">
      <Intro />
      <h2> SCREENPRINT BREAKDOWN</h2>
      <div className="wrap">
        <div className="screenprint">
          <InkButtonList />
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
