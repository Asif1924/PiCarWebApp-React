import React, { Component } from 'react'
import lightsOffImage from '../images/FrontlightsOff.png';
import lightsOnImage from '../images/FrontlightsOn.png';

class FrontLights extends Component {

    constructor(props){
        super(props);
        this.state = {
                        lights:'off',
                        lightsImage:"images/FrontlightsOff.png",
                        backgroundImage:"url(../images/FrontlightsOff.png)"
                        };
        this.handleClick=this.handleClick.bind(this);
    }

    getStyle = () =>{

        return {
            //z-index:5;position:fixed; top: 230px; left: 190px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/FrontlightsOff.png); background-size:cover
            zIndex:'5',
            position:'fixed',
            top:'230px',
            left:'100px',
            width:'30px',
            height:'30px',
            border:'none',
            borderColor:'black',
            backgroundColor:'transparent',
            backgroundImage:'url(../images/FrontlightsOff.png)',
            backgroundSize:'cover',
            objectFit:'contain'
        }
    }

    handleClick = () => {
        console.log("handleClick", this);  
        if(this.state.lights==="on"){
            this.setState({lights:"off"});
            this.setState({lightsImage:"images/FrontlightsOff.png"});
            this.setState({backgroundImage:"url(images/FrontlightsOff.png)"});
            this.style={backgroundImage:`url(${lightsOffImage})`}
        }else{
            this.setState({lights:"on"});
            this.setState({lightsImage:"images/FrontlightsOn.png"});
            this.setState({backgroundImage:"url(images/FrontlightsOn.png)"});
            this.style={backgroundImage:`url(${lightsOnImage})`}
        }
    }

    render() {
        var divStyle = {backgroundImage:'url('+this.state.lightsImage+')'}
        
        return (
            //<div className="frontLightsButton" style={divStyle} onClick={this.handleClick}>
            <div style={this.getStyle()} onClick={this.handleClick}>            
            </div>
        )
    }

}
export default FrontLights