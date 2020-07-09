import React from 'react';
import CarUp from './components/CarUp'
import './App.css';

function App() {

  const imageURL = "http://192.168.1.183:9787/?action=stream";
  const offset = 20;

  const imageURLStyle = {
    backgroundImage: "url(" + imageURL + ")"
  };

  const offsetStyle = {
    left: offset
  };

/*
		{{if handed==='right' }}
			<div id="controllerImage" style="z-index:4;position:fixed; top: 5px; left: ${offset}; width:410px; height: 310px; border:solid;border-color:black;background-color:#bbffdd;background-image:url(${streamURL}); background-size:cover; object-fit: contain" ></div>
			<div id="statusArea" style="z-index:5;position:fixed; top: 5px; left: ${offset}; width:410px; height: 50px; border:none;border-color:black" ></div>

			{{if usepad===true }}
				<div id="y-axisPad" style="z-index:5;position:fixed; top: 40px; left: 15px; width:80px; height: 180px; border:solid;border-color:black" >Y-Axis</div>
				<div id="xy-axisPad" style="z-index:5;position:fixed; top: 100px; left: 215px; width:260px; height: 120px; border:solid;border-color:black" >X-Axis</div>
			{{/if}}
			{{if usepad===false }}
				<div class="seeThrough" id="upButton" style="z-index:5;position:fixed; top: 20px; left: 300px; width:50px; height: 50px; border:solid;border-color:black;background-color:#b0c4de;background-image:url(app/images/UpArrow.png); background-size:cover" ></div>
				<div class="seeThrough" id="midButton" style="z-index:5;position:fixed; top: 85px; left: 300px; width:50px; height: 50px; border:solid;border-color:black;background-color:#b0c4de; background-image:url(app/images/StopImage.png); background-size:cover" ></div>				
				<div class="seeThrough" id="downButton" style="z-index:5;position:fixed; top: 150px; left: 300px; width:50px; height: 50px; border:solid;border-color:black;background-color:#b0c4de; background-image:url(app/images/DownArrow.png); background-size:cover" ></div>
				<div class="seeThrough" id="leftButton" style="z-index:5;position:fixed; top: 85px; left: 235px; width:50px; height: 50px; border:solid;border-color:black;background-color:#b0c4de; background-image:url(app/images/LeftArrow.png); background-size:cover" ></div>       
				<div class="seeThrough" id="rightButton" style="z-index:5;position:fixed; top: 85px; left: 365px; width:50px; height: 50px; border:solid;border-color:black;background-color:#b0c4de; background-image:url(app/images/RightArrow.png); background-size:cover" ></div> 
				<div class="seeThrough" id="stopButton" style="z-index:5;position:fixed; top: 150px; left: 365px; width:50px; height: 50px; border:solid;border-color:black;background-color:transparent; background-image:url(app/images/StopImage2.png); background-size:cover" ></div>       
			{{/if}}

			<div class="seeThrough" id="startButton" style="z-index:5;position:fixed; top: 230px; left: 70px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/GenericKey.png); background-size:cover" ></div>
			<div class="seeThrough" id="honkButton" style="z-index:5;position:fixed; top: 230px; left: 125px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/HornImage.png); background-size:cover" ></div>
			<div class="seeThrough" id="frontLightsButton" style="z-index:5;position:fixed; top: 230px; left: 190px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/FrontlightsOff.png); background-size:cover" ></div>
			<div class="seeThrough" id="recordButton" style="z-index:5;position:fixed; top: 230px; left: 240px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/RecordImageOff.png); background-size:cover" ></div>
			<div class="seeThrough" id="takePictureButton" style="z-index:5;position:fixed; top: 270px; left: 240px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/CameraImageOff.png); background-size:cover" ></div>
			<div class="seeThrough" id="recordAudioButton" style="z-index:5;position:fixed; top: 270px; left: 190px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/AudioRecord.png); background-size:cover" ></div>

			<div class="seeThrough" id="restartButton" style="z-index:5;position:fixed; top: 230px; left: 290px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/ResetImage2.png); background-size:cover" ></div>
			<div class="seeThrough" id="shutdownButton" style="z-index:5;position:fixed; top: 230px; left: 360px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/ShutdownImage2.png); background-size:cover" ></div>
			<!--<div class="seeThrough" id="emergButton" style="z-index:5;position:fixed; top: 230px; left: 430px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/EmergImage2.png); background-size:cover" ></div>//-->
			<div class="seeThrough" id="streamButton" style="z-index:5;position:fixed; top: 230px; left: 430px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/StreamOn.png); background-size:cover" ></div>

			<div id="speedArea" style="z-index:5;position:fixed; top: 5px; left: 5px; width:50px; height: 320px; border:solid;border-color:black;background-color:#b0c4de;" >Speed
				<input id="SpeedSlider" type="range" min="0" max="100" value="100" step="5" sliderOrientation="verticalInverted"  />
			</div>
		{{/if}}	



*/

  return (

    //$.tmpl("CarScreen",{ streamURL: carCommunicator.getStreamURL(), handed:"left", offset:"0px", usepad:false }).appendTo($element);

      <div className="ScreenLayoutFullWidth">
        <div className="controllerImage" style={imageURLStyle}></div>
        <div className="statusArea" style={offsetStyle}></div>

        
        <CarUp></CarUp>
        <div className="midButton" ></div>
        <div className="downButton" ></div>
        <div className="leftButton" ></div>
        <div className="rightButton" ></div>
        <div className="stopButton" ></div>

        <div className="startButton" ></div>
        <div className="honkButton" ></div>
        <div className="frontLightsButton" ></div>
        <div className="recordButton" ></div>
        <div className="takePictureButton" ></div>
        <div className="recordAudioButton" ></div>

        <div className="restartButton" ></div>
        <div className="shutdownButton" ></div>
        <div className="emergButton" ></div>
        <div className="streamButton" ></div>

      </div>
  );
}

export default App;
