import React, { Component } from 'react';
class BidTitle extends React.Component{
  render(){
    return <thead>
         {this.props.bidTitles.map(name=> <th key={name}><h3>{name}</h3></th>)}
      </thead>
  }
}

export default BidTitle;
