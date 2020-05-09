import React from 'react';
import Intro from './components/Intro';
import SideBySide from './components/SideBySide';
import Overview from './components/Overview';
import './styles/main.scss';

// App Component Architecture:
//
//                      index
//                        |
//                        |
//                   - - App - - -
//                 /      |         \
//               /        |           \
//            Intro   SideBySide   Overview
//                        |
//                    _ _ | _ _ _
//                  /             \
//                 /               \
//          InkButtonList     ScreenImageList    -- (hold 2 styles to control the images displayed)
//                 |                |                 • print-image-list (screenprint breakdown view)
//                 |                |                 • bitmap-image-list (halftone closeup view)
//            InkButton        ScreenImage


function App() {

  return (
    <div className="sep-breakdown-app">
      <Intro />
      <SideBySide />
      <Overview />
    </div>
  );
}

export default App;
