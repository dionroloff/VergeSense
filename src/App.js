import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Button, 
         DatePicker, 
         message, 
         Slider } from 'antd';

class App extends Component {

  state = {
    dateFrom: null,
    dateTo: null
  };

  handleChangeDateFrom = (dateFrom) => {
    message.info(`Selected Date: ${dateFrom ? dateFrom.format("YYYY-MM-DD") : "None"}`);
    this.setState({ dateFrom });
  };
  handleChangeDateTo = (dateTo) => {
    message.info(`Selected Date: ${dateTo ? dateTo.format("YYYY-MM-DD") : "None"}`);
    this.setState({ dateTo });
  };

  componentDidMount() {
    axios.get('https://api.jsonbin.io/b/5cafaeb4c0338e327afea672')
    .then( (response) => {
      console.log( response )
      // this.setState({ideas: response.data})
    })
    .catch( (error) => console.log(error))
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1>VergeSense</h1>
        </header>
        
        {/* <Button type="primary" onClick={this.handleClick}>Hello</Button> */}
        {/* <Slider 
          range step={10} 
          defaultValue={[20, 50]} 
          onChange={onChange} 
          onAfterChange={onAfterChange} 
          /> */}

        <div>
          <DatePicker id="dateFrom" onChange={this.handleChangeDateFrom} style={{ width: 200, margin: "15px auto", marginTop: 20 }}/>
          <div>
            Selected Date: {this.state.dateFrom ? this.state.dateFrom.format("YYYY-MM-DD") : "None"}
          </div>

          <DatePicker id="dateTo" onChange={this.handleChangeDateTo} style={{ width: 200, margin: "15px auto", marginTop: 20 }}/>
          <div>
            Selected Date: {this.state.dateTo ? this.state.dateTo.format("YYYY-MM-DD") : "None"}
          </div>
        </div>

       </div>
    )
  }
}

export default App;