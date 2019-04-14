import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

class TestGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
  }

  componentWillMount() {
    axios.get("https://api.jsonbin.io/b/5cafaeb4c0338e327afea672")
      .then( (response) => {
        this.setState({apiResponse: response})
      }).catch( (error) => 
        console.log( `Error during GET request: ${error}` ));
        // console.log("componentDidMount", this.state.apiResponse)
  }

  render() {

    const dateFrom = new Date(this.props.reduxStore.dates.dateFrom);
    const dateTo = new Date(this.props.reduxStore.dates.dateTo);

    const data = [
      { name: "Sensor 1", data: { [dateFrom]: 3, [dateTo]: 4 } },
      { name: "Sensor 2", data: { "2017-03-01": 5, "2017-04-01": 34 } },
      { name: "Sensor 3", data: { "2017-04-02": 5, "2017-05-01": 3 } },
      { name: "Sensor 4", data: { "2017-05-01": 5, "2017-06-01": 3 } }
    ];

    //    This will cycle through the entire API response and get only
    //    those readings between the dates the user selects.
    const timeFilteredSensorReports = this.state.apiResponse.filter(report => {
      return report.time > [dateFrom] && report.time < [dateTo];
    });
    

    console.log("render()", this.state.apiResponse)
    console.log("dateFrom: ", this.dateFrom);

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
