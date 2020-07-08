import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const imageURL = "http://192.168.1.183:9787/?action=stream";

  const imageURLStyle = {
    backgroundImage: "url(" + imageURL + ")"
  };

  //-background-image:url( http://192.168.1.183:9787/?action=stream ); 
/*
.statusArea{
  z-index:5;
  position:fixed; 
  top: 5px; left: ${offset}; 
  width:410px; 
  height: 50px; 
  border:none;
  border-color:black
} */
  return (
      <div className="ScreenLayoutFullWidth">
        <div className="controllerImage" style={imageURLStyle}></div>
      </div>
  );
}

export default App;
