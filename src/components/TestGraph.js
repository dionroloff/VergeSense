import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col } from "antd";
import Legend from "./Legend";
// import ShowcaseButton from '../showcase-components/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from "react-vis";

const lightGreenData = [{ x: "A", y: 99 }];
const lightBlueData = [{ x: "B", y: 11 }];
const orangeData = [{ x: "C", y: 8 }];
const darkGreenData = [{ x: "D", y: 19 }];

// const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}, {x: 'D', y: 12}];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y, blueData[idx].y)
// }));

class TestGraph extends Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <Row>
          {JSON.stringify(this.props.reduxStore.dates)}
        {/* <Col span={2}>
          <Legend />
        </Col> */}

        <Col>
          {/* <ShowcaseButton
          onClick={() => this.setState({useCanvas: !useCanvas})}
          buttonContent={content}
        /> */}
          <XYPlot xType="ordinal" width={1000} height={300} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <BarSeries
              className="vertical-bar-series-example"
              data={lightGreenData}
            //   style={{ color: "#5DBCD2" }}
            />
            <BarSeries
              className="vertical-bar-series-example"
              data={lightBlueData}
            //   style={{ color: "#D79C6C" }}
            />
            <BarSeries
              className="vertical-bar-series-example"
              data={orangeData}
            //   style={{ color: "#5DBCD2" }}
            />
            <BarSeries
              className="vertical-bar-series-example"
              data={darkGreenData}
            //   style={{ color: "#D79C6C" }}
            />
            
            {/* <BarSeries data={blueData} /> */}
            {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
          </XYPlot>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});
  
export default connect(mapStateToProps)(TestGraph);
