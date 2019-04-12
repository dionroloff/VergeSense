import React, { Component } from "react";
import { 
  DatePicker, message, Row, Col
} from "antd";

class Calendar extends Component {

  state = {
    dateFrom: null,
    dateTo: null
  };

  handleChangeDateFrom = dateFrom => {
    message.info(
      `Selected Date: ${dateFrom ? dateFrom.format("YYYY-MM-DD") : "None"}`
    );
    this.setState({ dateFrom });
  };
  handleChangeDateTo = dateTo => {
    message.info(
      `Selected Date: ${dateTo ? dateTo.format("YYYY-MM-DD") : "None"}`
    );
    this.setState({ dateTo });
  };

  render() {
    return (
      <div>
        <Row className="calendars">
          <Col span={12} >
          <h4>Date From</h4>
            <DatePicker
              id="dateFrom"
              onChange={this.handleChangeDateFrom}
              style={{ width: 200, margin: "15px auto", marginTop: 20 }}
            />
            <div>
              Selected Date:{" "}
              {this.state.dateFrom
                ? this.state.dateFrom.format("YYYY-MM-DD")
                : "None"}
            </div>
          </Col>
          <Col span={12}>
          <h4>Date To</h4>
            <DatePicker
              id="dateTo"
              onChange={this.handleChangeDateTo}
              style={{ width: 200, margin: "15px auto", marginTop: 20 }}
            />
            <div>
              Selected Date:{" "}
              {this.state.dateTo
                ? this.state.dateTo.format("YYYY-MM-DD")
                : "None"}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Calendar;
