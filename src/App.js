import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var carStream = 'http://192.168.1.183:9787/?action=stream';
  return (
      <div className="ScreenLayoutFullWidth">
        <div className="controllerImage" ></div>
      </div>
  );
}

export default App;
