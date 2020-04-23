import React from 'react';
import Intro from './components/Intro';
import SideBySide from './components/SideBySide';
import Overview from './components/Overview';
import './styles/main.scss';

function App() {

  return (
    <div className="App">
      <Intro />
      <SideBySide />
      <Overview />
    </div>
  );
}

export default App;
