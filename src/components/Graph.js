import React from "react";
import { connect } from 'react-redux';
import Legend from "./Legend";
import { Row, Col } from "antd";
import "../../node_modules/react-vis/dist/style.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

const MSEC_DAILY = 86400000;

function Graph(props) {
  //dateFrom and dateTo variables are in milliseconds
  const dateFrom = new Date(props.reduxStore.dates.dateFrom).getTime();
  // const startTimestamp = dateFrom.getMilliseconds();

  const dateTo = new Date(props.reduxStore.dates.dateTo).getTime();
  // const endTimestamp = dateTo.getMilliseconds();

  console.log(dateTo - dateFrom);

  const data = props.apiResponse;

  return (
    <Row>
      {JSON.stringify(props.reduxStore.dates)}
      <Col span={2}>
        <Legend />
      </Col>

      <Col span={22}>
        <XYPlot className="graph" xType="time" width={1000} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Time" />
          <YAxis title="Number of People" />
          <LineSeries
            data={[
              { x: dateTo - MSEC_DAILY, y: 1000 },
              { x: dateTo - MSEC_DAILY * 2, y: 0 },
              // { x: dateFrom + dateTo * 3, y: 1500 },
              // { x: dateFrom + dateTo * 4, y: 1200 }
            ]}
          />
          {/* <LineSeries
            data={[
              { x: startTimestamp + MSEC_DAILY, y: 1400 },
              { x: startTimestamp + MSEC_DAILY * 2, y: 800 },
              { x: startTimestamp + MSEC_DAILY * 3, y: 600 },
              { x: startTimestamp + MSEC_DAILY * 4, y: 2000 }
            ]}
          />
          <LineSeries
            data={[
              { x: startTimestamp + MSEC_DAILY, y: 1000 },
              { x: startTimestamp + MSEC_DAILY * 2, y: 400 },
              { x: startTimestamp + MSEC_DAILY * 3, y: 200 },
              { x: startTimestamp + MSEC_DAILY * 4, y: 1500 }
            ]}
          />
          <LineSeries
            data={[
              { x: startTimestamp + MSEC_DAILY, y: 500 },
              { x: startTimestamp + MSEC_DAILY * 2, y: 200 },
              { x: startTimestamp + MSEC_DAILY * 3, y: 100 },
              { x: startTimestamp + MSEC_DAILY * 4, y: 700 }
            ]}
          /> */}
        </XYPlot>
      </Col>
    </Row>
  );
}


const mapStateToProps = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToProps)(Graph);