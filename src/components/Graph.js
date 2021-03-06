import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Spin } from 'antd';
import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

let graphData = [];

class Graph extends Component {

  componentWillMount() {
    axios.get("https://api.jsonbin.io/b/5cafaeb4c0338e327afea672")
      .then(response => {
        this.props.dispatch({
          type: "SET_API_DATA",
          payload: response
        });
      })
      .catch(error => console.log(`Error during GET request: ${error}`));
  }

  render() {
    if (this.props.reduxStore.graphData.apiData.length === 0) {
      console.log("Waiting for API Data...");
      return (<div>
                <p>Waiting for API Data...</p>
                <Spin/>
              </div>
             );
    } else {

    let totalReadings = this.props.reduxStore.graphData.apiData.data;

    if (this.props.reduxStore.graphData.dates.length !== 0) {
      //this is assigning user-selected dates to variables
      const dateFrom = this.props.reduxStore.graphData.dates.dateFrom;
      const dateTo = this.props.reduxStore.graphData.dates.dateTo;

      //This will cycle through the entire JSON object and get only
      //those readings between the dates the user selects.
      const timeFilteredSensorReports = totalReadings.filter( (report) => {
        return report.time >= [dateFrom] && report.time <= [dateTo];
      });

      //this function will produce an array of each of the 
      //sensor names in the API data
      function getSensors(data) {
        let sensors = [];
        
        //for each object in the data array,
        //check if its "sensor" property already exists
        //in the sensors array, if not, push the string.
        //If no "sensor" property, name it "Unnamed Sensor"
        data.forEach( (obj) => {
          if (obj.sensor === "") {
            let sensor = "Unnamed Sensor";
            sensors.push(sensor);
             
          } else {
            let sensor = obj.sensor;
            if (!sensors.includes(sensor)) {
              sensors.push(sensor) 
            }
          }
        });
        return sensors;
      };
      //assigns the array of each sensor used
      //in the filtered reports to totalSensors
      const totalSensors = getSensors(timeFilteredSensorReports);

      //Assigning each sensor its own object with name and data properties
      //and push the objects to the graphData array.
      totalSensors.forEach( (sensor) => {
        graphData.push({
          name: sensor, 
          data: {}
        });
      });

      //this loops through both the filtered reports and graphData array.
      //it then assigns the time and number of people properties to the objects 
      //in graphData
      for (let i = 0; i < timeFilteredSensorReports.length; i++) {
        for (let j = 0; j < graphData.length; j++) {
          if (timeFilteredSensorReports[i].sensor === graphData[j].name) {
            Object.assign( graphData[j].data, {
              [timeFilteredSensorReports[i].time]: [timeFilteredSensorReports[i].number_of_people]
            });
          }
        }
      }

    } else {
      console.log("User has not selected any dates.");
    }
  }
    return (
      <div>
        {/* {JSON.stringify(this.props.reduxStore)} */}
        <LineChart data={graphData} />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Graph);
