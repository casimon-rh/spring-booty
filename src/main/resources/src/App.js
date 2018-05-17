import React, { Component } from 'react';
import logo from './logo.svg';
import xhr from 'xhr';
import './App.css';

class App extends Component {
  config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080'
  }
  state = {
    name: ''
  }
  componentDidMount() {
    var self = this;
    xhr(self.config.baseUrl + '/api/nombre', {
      headers: [{
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }]
    },(err, res, body)=> {
        body = JSON.parse(body);
        this.setState( {name: body.nombre });
      });
  }
  getState(){
    return this.state;
  }
  render() {
    var self = this;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{self.getState().name}</p>
      </div>
    );
  }
}

export default App;
