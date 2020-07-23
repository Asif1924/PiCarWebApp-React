import React, { Component } from 'react'


class FrontLights extends Component {

    constructor(props){
        super(props);
        this.state = {
                        lights:'off',
                        lightsImage:"images/FrontlightsOff.png",
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
        if(this.state.lights==="on"){
            this.setState({lights:"off"});
            this.setState({lightsImage:"images/FrontlightsOff.png"});
        }else{
            this.setState({lights:"on"});
            this.setState({lightsImage:"images/FrontlightsOn.png"});
        }
        console.log(this.style);  
    }

    render() {
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
        
        return (
            <div style={buttonStyle} onClick={this.handleClick}>
                <img
                    alt={this.state.lights}
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