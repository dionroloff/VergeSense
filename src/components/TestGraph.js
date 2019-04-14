import React, { Component } from "react";
import { connect } from "react-redux";

import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

class TestGraph extends Component {

  render() {

    this.componentDidMount = () => {
      const dateFrom = new Date(this.props.reduxStore.dates.dateFrom);
      const dateTo = new Date(this.props.reduxStore.dates.dateTo);
      const apiResponse = this.props.apiResponse;

      const data = [
        { name: "Sensor 1", data: { [dateFrom]: 3, [dateTo]: 4 } },
        { name: "Sensor 2", data: { "2017-03-01": 5, "2017-04-01": 34 } },
        { name: "Sensor 3", data: { "2017-04-02": 5, "2017-05-01": 3 } },
        { name: "Sensor 4", data: { "2017-05-01": 5, "2017-06-01": 3 } }
      ];

      console.log(apiResponse);

      //   This will cycle through the entire API response and get only
      //   those readings between the dates the user selects.
      const timeFilteredSensorReports = apiResponse.filter(report => {
        return report.time > [dateFrom] && report.time < [dateTo];
      });
    };

    return (
      <div>
        {JSON.stringify(this.props.reduxStore.dates)}
        <LineChart data={this.data} />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(TestGraph);
