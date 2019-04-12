import React, { Component } from "react";
import { connect } from 'react-redux';
import { 
  DatePicker, message, Row, Col, Button
} from "antd";

class Calendar extends Component {

  state = {
    dateFrom: null,
    dateTo: null,
  };
  
  handleChangeDateFrom = ( dateFrom ) => {
    message.info(
      `Selected Date: ${dateFrom ? dateFrom.format("MMM Do YYYY") : "None"}`
    );
    this.setState({ dateFrom });
    console.log( "dateFrom", dateFrom._d );
  };

  handleChangeDateTo = ( dateTo ) => {
    message.info(
      `Selected Date: ${dateTo ? dateTo.format("MMM Do YYYY") : "None"}`
    );
    this.setState({ dateTo });
    // will log only the day of week, date, and time
    console.log( "dateto", dateTo._d );
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
  }

  render() {
    return (
      <div>
        <Row className="calendars">
          <Col span={12} >
          <h4>From</h4>
            <DatePicker
              id="dateFrom"
              onChange={this.handleChangeDateFrom}
              style={{ width: 200, margin: "15px auto", marginTop: 20 }}
            />
            <div>
              Selected Date:{" "}
              {this.state.dateFrom
                ? this.state.dateFrom.format("MMM Do YYYY")
                : "None"}
            </div>
          </Col>
          <Col span={12}>
          <h4>To</h4>
            <DatePicker
              id="dateTo"
              onChange={this.handleChangeDateTo}
              style={{ width: 200, margin: "15px auto", marginTop: 20 }}
            />
            <div>
              Selected Date:{" "}
              {this.state.dateTo
                ? this.state.dateTo.format("MMM Do YYYY")
                : "None"}
            </div>
          </Col>
        </Row>
        <Row><Button type="primary" onClick={this.handleDispatch}>Select Dates</Button></Row>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToProps)(Calendar);
