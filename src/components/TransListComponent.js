import React, { Component } from 'react';
import '../App.css';

const TransListComponent = (props) => {
  const element = this.state.element;
    return (
      <div className="trans-list">
        <div id ="income">{
          () => {if(element.type === 'income')
        {this.state.transList.map(element => {(<div><span>{element.description}</span><span>{element.amount}</span><span>{element.type}</span><span> {element.date}{element.time}</span></div>)})}}}
        </div>
      </div>
    );
  
}

export default TransListComponent;
