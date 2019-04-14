import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";
import { DatePicker, Row, Col, Button, TimePicker } from "antd";

let timeFrom, timeTo;

class Calendar extends Component {
  state = {
    dateFrom: null,
    dateTo: null,
  };

  handleChangeDateFrom = (date, dateString) => {
    this.setState({ dateFrom: dateString });
  };
  handleChangeDateTo = (date, dateString) => {
    this.setState({ dateTo: dateString });
  };
  handleChangeTimeFrom = (time, timeString) => {
    timeFrom = timeString;
  };
  handleChangeTimeTo = (time, timeString) => {
    timeTo = timeString;
  };
  handleDispatch = () => {
    this.props.dispatch({
      type: "SET_DATA",
      payload: {
        dateFrom: this.state.dateFrom + "T" + timeFrom + "Z",
        dateTo: this.state.dateTo + "T" + timeTo + "Z"
      }
    });
  };

  render() {
    return (
      <div>
        <Row className="date-time-pickers">
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
            {this.state.dateFrom 
            // &&
            //  this.state.dateTo &&
            //  this.state.timeFrom &&
            //  this.state.timeTo 
             !== null ? (
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
