import React, { Component } from 'react';
// import { Row, Col } from 'antd';
import '../../node_modules/react-vis/dist/style.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

const MSEC_DAILY = 86400000;

export default function Graph(props) {
  const timestamp = new Date('September 9 2017').getTime();
  return (
    <XYPlot className="graph" xType="time" width={1000} height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="X Axis" />
      <YAxis title="Y Axis" />
      <LineSeries
        data={[
          {x: timestamp + MSEC_DAILY, y: 300},
          {x: timestamp + MSEC_DAILY * 2, y: 500},
          {x: timestamp + MSEC_DAILY * 3, y: 1500},
          {x: timestamp + MSEC_DAILY * 4, y: 1200}
        ]}
      />
      <LineSeries data={[
          {x: timestamp + MSEC_DAILY, y: 1400},
          {x: timestamp + MSEC_DAILY * 2, y: 800},
          {x: timestamp + MSEC_DAILY * 3, y: 600},
          {x: timestamp + MSEC_DAILY * 4, y: 2000}
          ]} />
      <LineSeries
        data={[
          {x: timestamp + MSEC_DAILY, y: 1000},
          {x: timestamp + MSEC_DAILY * 2, y: 400},
          {x: timestamp + MSEC_DAILY * 3, y: 200},
          {x: timestamp + MSEC_DAILY * 4, y: 1500}
        ]}
      />
    </XYPlot>
  );
}
