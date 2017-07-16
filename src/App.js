import React, { Component } from 'react';
import BidDashboard from './components/bidDashboard';
import logo from './logo.svg';
import './App.css';
var request = require("superagent");
var axios = require("axios");

class App extends Component {
  constructor(){
    super();
    this.getTableDataFromServer = this.getTableDataFromServer.bind(this);
    this.state = {bidData : []};
  }
  getTableDataFromServer(){
    var that = this;
    axios.get('http://localhost:3001/getTableData')
    .then(function(res, err){
      // Do something
      console.log(JSON.stringify(res.data));
      that.setState({'bidData' : res.data});
    })
    .catch(function(error){
      console.log(error);
    });

  }
  componentWillMount(){
    var that = this;
    // setInterval(function(){
      that.getTableDataFromServer();
    // }, 2000);
  }
  componentDidMount(){

  }
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p cla<tr></tr>ssName="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <BidDashboard bidData={this.state.bidData} />
    );
  }
}

export default App;
