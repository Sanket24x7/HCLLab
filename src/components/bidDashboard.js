import React, { Component } from 'react';
import BidValues from './bidTableBody';
import BidTitle from './bidTableHeader';

class BidDashboard extends React.Component{
  render(){
    var titles = ["Name", "Current Best Price", "Current Best Asked Price", "Best bid last change", "Best ask last changed", "Mid price"];
    return <table className="gridfield">
           <BidTitle bidTitles={titles} />
           <BidValues bidValues={this.props.bidData} />
        </table>;
  }
}

export default BidDashboard;
