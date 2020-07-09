import React, { Component } from 'react'

class CarStream extends Component {

    getStyle = () =>{

        const offset="5px";
        const streamURL="http://192.168.1.183:9787/?action=stream";

        return {
            //z-index:4;position:fixed; top: 5px; left: ${offset}; width:410px; height: 310px; border:solid;border-color:black;background-color:#bbffdd;background-image:url(${streamURL}); background-size:cover; object-fit: contain
            zIndex:'4',
            position:'fixed',
            top:'5px',
            left:`${offset}`,
            width:'410px',
            height:'310px',
            border:'solid',
            borderColor:'black',
            backgroundColor:'#bbffdd',
            backgroundImage:`url(${streamURL})`,
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
export default CarStream