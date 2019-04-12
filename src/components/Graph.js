import React, { Component } from "react";
import Legend from './Legend';
import { Row, Col } from 'antd';
import "../../node_modules/react-vis/dist/style.css";
// import DiscreteColorLegend from 'legends/discrete-color-legend';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

const MSEC_DAILY = 86400000;

export default function Graph() {
  const timestamp = new Date("September 9 2017").getTime();
  return (
    <Row>
      
      <Col span={4}>
        <Legend/>
      </Col>

      <Col span={20}>
    <XYPlot className="graph" xType="time" width={1000} height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="Time" />
      <YAxis title="Number of People" />
      <LineSeries
        data={[
          { x: timestamp + MSEC_DAILY, y: 300 },
          { x: timestamp + MSEC_DAILY * 2, y: 500 },
          { x: timestamp + MSEC_DAILY * 3, y: 1500 },
          { x: timestamp + MSEC_DAILY * 4, y: 1200 }
        ]}
      />
      <LineSeries
        data={[
          { x: timestamp + MSEC_DAILY, y: 1400 },
          { x: timestamp + MSEC_DAILY * 2, y: 800 },
          { x: timestamp + MSEC_DAILY * 3, y: 600 },
          { x: timestamp + MSEC_DAILY * 4, y: 2000 }
        ]}
      />
      <LineSeries
        data={[
          { x: timestamp + MSEC_DAILY, y: 1000 },
          { x: timestamp + MSEC_DAILY * 2, y: 400 },
          { x: timestamp + MSEC_DAILY * 3, y: 200 },
          { x: timestamp + MSEC_DAILY * 4, y: 1500 }
        ]}
      />
      <LineSeries
        data={[
          { x: timestamp + MSEC_DAILY, y: 500 },
          { x: timestamp + MSEC_DAILY * 2, y: 200 },
          { x: timestamp + MSEC_DAILY * 3, y: 100 },
          { x: timestamp + MSEC_DAILY * 4, y: 700 }
        ]}
      />
    </XYPlot>
    </Col>
    </Row>
  );
}
