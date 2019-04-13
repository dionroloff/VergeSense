import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";
import { DatePicker, message, Row, Col, Button, TimePicker } from "antd";

class Calendar extends Component {
  state = {
    dateFrom: null,
    timeFrom: null,
    dateTo: null,
    timeTo: null
  };

  handleChangeDateFrom = dateFrom => {
    message.info(
      `Selected Date: ${dateFrom ? dateFrom.format("MMM Do YYYY") : null}`
    );
    this.setState({ dateFrom });
    console.log("dateFrom", dateFrom);
  };

  handleChangeDateTo = dateTo => {
    message.info(
      `Selected Date: ${dateTo ? dateTo.format("MMM Do YYYY") : null}`
    );
    this.setState({ dateTo });
    // will log only the day of week, date, and time
    console.log("dateto", dateTo._d);
  };

  handleDispatch = () => {
    console.log("clicked");
    this.props.dispatch({
      type: "SET_DATA",
      payload: {
        dateFrom: this.state.dateFrom._d,
        dateTo: this.state.dateTo._d
      }
    });
  };

  handleChangeTimeFrom = (time, timeString) => {
    this.setState({
      timeFrom: timeString
    })
    console.log(`timeString: ${timeString}`);
  };
  handleChangeTimeTo = (time, timeString) => {
    this.setState({
      timeTo: timeString
    })
    console.log(`timeString: ${timeString}`);
  };

  render() {
    return (
      <div>
        <Row className="date-pickers">
          <Col span={12}>
            <h4>From</h4>
            <DatePicker
              id="dateFrom"
              onChange={this.handleChangeDateFrom}
              style={{ width: 200, margin: "15px auto", marginTop: 20 }}
            />

            <TimePicker
              onChange={this.handleChangeTimeFrom}
              defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
            />
          </Col>

          <Col span={12}>
            <h4>To</h4>
            <DatePicker
              id="dateTo"
              onChange={this.handleChangeDateTo}
              style={{ width: 200, margin: "15px auto", marginTop: 20 }}
            />

            <TimePicker
              onChange={this.handleChangeTimeTo}
              defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
            />
          </Col>
        </Row>

        <Row className="button-row">
          <Col>
            {this.state.timeTo !== null ? (
              <Button type="primary" onClick={this.handleDispatch}>
                Show Graph
              </Button>
            ) : (
              <Button disabled type="primary" onClick={this.handleDispatch}>
                Show Graph
              </Button>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Calendar);
