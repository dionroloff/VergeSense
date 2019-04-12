import React, { Component } from "react";
import { Divider } from 'antd';

class Legend extends Component {
    render() {

    const sensors = [1, 2, 3, 4];

        return(
            <div>
                <p><u><b>Legend</b></u></p>
                -<p style={{color: "#88C7C5"}} >Sensor 1</p>
                -<p style={{color: "#293169"}} >Sensor 2</p>
                -<p style={{color: "#D79C6C"}} >Sensor 3</p>
                -<p style={{color: "#208580"}} >Sensor 4</p>
                -
            </div>
        )
    }
}

export default Legend