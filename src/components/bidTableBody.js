import React, { Component } from 'react';
import Trend from 'react-trend';

class BidValues extends React.Component{
  render(){
    var rows = this.props.bidValues.map(function(bid,index){
      return (
      <tr key={index}> <td><span> {bid.name}</span></td>
      <td><span> {bid.currentBestBidPrice}</span></td>
      <td><span> {bid.currentBestAskPrice}</span></td>
      <td><span> {bid.bestBidLastChange}</span></td>
      <td><span> {bid.bestAskLastChanged}</span></td>
      <td><span> <Trend data={[bid.currentBestBidPrice, bid.currentBestAskPrice, bid.bestBidLastChange, bid.bestAskLastChanged]} /> </span></td> </tr>);
    });
    return <tbody>
                  {rows}
           </tbody>

  }
}
// bidValues.propTypes = {
//   value: React.PropTypes.number.isRequired
// }

export default BidValues;
