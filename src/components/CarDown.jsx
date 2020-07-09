import React, { Component } from 'react'
import dirImage from '../images/DownArrow.png';

class CarDown extends Component {

    getStyle = () =>{
        return {
            //z-index:5;position:fixed; top: 150px; left: 300px; width:50px; height: 50px; border:solid;border-color:black;background-color:#b0c4de; background-image:url(images/DownArrow.png); background-size:cover;
            zIndex:'5',
            position:'fixed',
            top:'150px',
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
export default CarDown