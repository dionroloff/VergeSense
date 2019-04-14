import React, { Component } from "react";
import { Divider } from "antd";

import Graph from '../src/components/Graph';
// import Graph from '../src/components/Graph';
import Calendar from './components/Calendar';
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Divider><h1>VergeSense</h1></Divider>
        </header>
        <Calendar />
        {/* Ant design divider */}
        <Divider/>
        {/* <Graph apiResponse={this.state.apiResponse}/> */}
        <Graph/>
      </div>
    );
  }
}

export default App;
