import React, { Component } from "react";

class Legend extends Component {
    render() {
        return(
            <div>
                {/* <u><h4>Legend</h4></u> */}
                {/* Light Blue */}
                <p style={{color: "#5DBCD2"}} >Sensor 1</p>
                {/* Dark Blue */}
                -<p style={{color: "#293169"}} >Sensor 2</p>
                {/* Orange */}
                -<p style={{color: "#D79C6C"}} >Sensor 3</p>
                {/* Teal */}
                -<p style={{color: "#208580"}} >Sensor 4</p>
            </div>
        );
    }
}

export default Legend