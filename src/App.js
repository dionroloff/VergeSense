import React, { Component } from 'react';
import './App.css';
import { Button, DatePicker, message } from 'antd';

class App extends Component {

  state = {
    date: null,
  };

  handleClick = (event) => {
    console.log('clicked');
  }

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1>VergeSense App</h1>
        </header>
        
        <Button type="primary" onClick={this.handleClick}>Hello</Button>

        <div style={{ width: 400, margin: "100px auto" }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            Selected Date: {this.state.date ? this.state.date.format("YYYY-MM-DD") : "None"}
          </div>
        </div>

       </div>
    )
  }
}

export default App;