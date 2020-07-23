import React, { Component } from 'react'
import lightsOffImage from '../images/FrontlightsOff.png';
import lightsOnImage from '../images/FrontlightsOn.png';

class FrontLights extends Component {

    constructor(props){
        super(props);
        this.state = {
                        lights:'off',
                        lightsImage:"images/FrontlightsOff.png",
                        backgroundImage:"url(../images/FrontlightsOff.png)",
                        imgSrcOn:"../images/FrontlightsOn.png",
                        imgSrcOff:"../images/FrontlightsOff.png"
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
            
            backgroundSize:'cover',
            objectFit:'contain'
        }
    }

    handleClick = (event) => {
        //console.log("handleClick");  
        //console.log("handleClick", event);  
        //console.log(event);  
        if(this.state.lights==="on"){
            this.setState({lights:"off"});
            this.setState({lightsImage:"images/FrontlightsOff.png"});
            this.setState({backgroundImage:"url(images/FrontlightsOff.png)"});
            this.style={backgroundImage:`url(${lightsOffImage})`}
            console.log(this.style);  
        }else{
            this.setState({lights:"on"});
            this.setState({lightsImage:"images/FrontlightsOn.png"});
            this.setState({backgroundImage:"url(images/FrontlightsOn.png)"});
            this.style={backgroundImage:`url(${lightsOnImage})`}
            console.log(this.style);  
        }
        
    }

    render() {
        var imgURL = this.state.lights==="on" ? this.state.imgSrcOn : this.state.imgSrcOff;
        //console.log( imgURL );

        var buttonStyle = {
            zIndex:'5',
            position:'fixed',
            top:'230px',
            left:'100px',
            width:'30px',
            height:'30px',
            border:'none',
            borderColor:'black',
            backgroundColor:'transparent',            
            backgroundSize:'cover',
            objectFit:'contain'                 
        }
        //console.log( "divStyle = " + divStyle);
        //console.log( divStyle );
        
        return (
            //<div className="frontLightsButton" style={divStyle} onClick={this.handleClick}>
            //<div style={this.getStyle()} onClick={this.handleClick.bind(this)}>            
            <div style={buttonStyle} onClick={this.handleClick}>
                <img
                    style={{
                        width:'30px',
                        height:'30px',
                        objectFit:'contain'
                    }} 
                    src={this.state.lightsImage}
                />
            </div>
        )
    }

}
export default FrontLights