import React, { Component } from 'react'
import dirImage from '../images/UpArrow.png';

class CarUp extends Component {

    getStyle = () =>{
        return {
            zIndex:'5',
            position:'fixed',
            top:'20px',
            left:'300px',
            width:'50px',
            height:'50px',
            border:'solid',
            borderColor:'black',
            backgroundColor:'#b0c4de',
            backgroundImage:`url(${dirImage})`,
            backgroundSize:'cover'
        }
    }

    handleClick = () => {
        console.log("handleClick", this);
        
    }

    render() {
        
        return (
            <div style={this.getStyle()} onClick={this.handleClick}>
                
            </div>
        )
    }

}
export default CarUp