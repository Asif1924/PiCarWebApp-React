import React, { Component } from 'react'
import dirImage from '../images/GenericKey.png';

class CarStart extends Component {

    getStyle = () =>{

        return {
            //z-index:5;position:fixed; top: 230px; left: 70px; width:30px; height: 30px; border:none;border-color:black;background-color:transparent;background-image:url(app/images/GenericKey.png); background-size:cover
            zIndex:'5',
            position:'fixed',
            top:'230px',
            left:'10px',
            width:'30px',
            height:'30px',
            border:'none',
            borderColor:'black',
            backgroundColor:'transparent',
            backgroundImage:`url(${dirImage})`,
            backgroundSize:'cover',
            objectFit:'contain'
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
export default CarStart