import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col } from "antd";
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class TestGraph extends Component {

  data = [
    {"name":"Sensor 1", "data": {"2017-01-01": 3, "2017-01-02": 4}},
    {"name":"Sensor 2", "data": {"2017-03-01": 5, "2017-04-01": 34}},
    {"name":"Sensor 3", "data": {"2017-04-02": 5, "2017-05-01": 3}},
    {"name":"Sensor 4", "data": {"2017-05-01": 5, "2017-06-01": 3}}
  ];

  render() {
    return(
      <div>
          <LineChart data={this.data} />
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});
  
export default connect(mapStateToProps)(TestGraph);
