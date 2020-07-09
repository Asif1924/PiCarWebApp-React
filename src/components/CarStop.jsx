import React, { Component } from 'react'
import dirImage from '../images/StopImage2.png';

class CarStop extends Component {

    getStyle = () =>{
        return {
            //z-index:5;position:fixed; top: 150px; left: 365px; width:50px; height: 50px; border:solid;border-color:black;background-color:transparent; background-image:url(images/StopImage2.png); background-size:cover;
            zIndex:'5',
            position:'fixed',
            top:'150px',
            left:'365px',
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
export default CarStop