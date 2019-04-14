import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

class TestGraph extends Component {

  componentWillMount() {
    axios
      .get("https://api.jsonbin.io/b/5cafaeb4c0338e327afea672")
      .then(response => {
        this.props.dispatch({
          type: "SET_API_DATA",
          payload: response
        });
      })
      .catch(error => console.log(`Error during GET request: ${error}`));
  }

  render() {

    let totalReadings = this.props.reduxStore.graphData.apiData.data;

    if (this.props.reduxStore.graphData.dates.length !== 0) {
      const dateFrom = this.props.reduxStore.graphData.dates.dateFrom;
      const dateTo = this.props.reduxStore.graphData.dates.dateTo;
      console.log("dateFrom: ", dateFrom);

      //    This will cycle through the entire JSON object and get only
      //    those readings between the dates the user selects.
      const timeFilteredSensorReports = totalReadings.filter( (report) => {
        return report.time > [dateFrom] && report.time < [dateTo];
      });

      console.log("timeFilteredSensorReports: ", timeFilteredSensorReports);

      // const data = [
      // { name: "Sensor 1", data: { [dateFrom]: 3, [dateTo]: 4 } },
      // { name: "Sensor 2", data: { "2017-03-01": 5, "2017-04-01": 34 } },
      // { name: "Sensor 3", data: { "2017-04-02": 5, "2017-05-01": 3 } },
      // { name: "Sensor 4", data: { "2017-05-01": 5, "2017-06-01": 3 } }
      // ];

    } else {
      console.log("dates.length === 0");
    }

    return (
      <div>
        {JSON.stringify(this.props.reduxStore)}
        <LineChart data={this.data} />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(TestGraph);
