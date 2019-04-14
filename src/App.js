import React, { Component } from "react";
import { Divider } from "antd";
import axios from "axios";

import TestGraph from '../src/components/TestGraph';
// import Graph from '../src/components/Graph';
import Calendar from './components/Calendar';
import "./App.css";

class App extends Component {

  state = {
    apiResponse: null
  };

  componentDidMount() {
    axios
      .get("https://api.jsonbin.io/b/5cafaeb4c0338e327afea672")
      .then( (response) => {
        this.setState({apiResponse: response})
        // console.log( this.state.apiResponse );
      }).catch( (error) => 
        console.log( `Error during GET request: ${error}` ));
  }

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
        <TestGraph apiResponse={this.state.apiResponse}/>
      </div>
    );
  }
}

export default App;
