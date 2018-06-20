import React, { Component } from "react";
import "./App.css";
import AddEntryComponent from "./components/AddEntryComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transList:[],
      balance: 0
    };
    this.passToList = this.passToList.bind(this);
  }
  passToList(myTrans) {
    console.log(myTrans);
    this.setState({
      transList: [...this.state.transList, myTrans]
    });  
  }
  render() {

    let myBalance = 0
    const myIncome = this.state.transList.filter(element => element.type === 'income').map((element,i) => {
      myBalance += Number(element.amount);
       return (<div key = {element.description +"-" + i} ><span>{element.description}</span><span>{element.amount}</span><span> {element.date}{element.time}</span></div>)
    });

    const myExpense = this.state.transList.filter(element => element.type === 'expense').map((element,i) => {
      myBalance -= Number(element.amount);
      return (<div key = {element.description +"-"+ i} ><span>{element.description}</span><span>{element.amount}</span><span> {element.date}{element.time}</span></div>)
    });
    console.log(this.state)
    return (
      <div className="App">
        <h1>Account Balance Tracker</h1>
        <AddEntryComponent passToList={this.passToList} />
        <div id="lists">
        <div id ="income"><h2>Income:</h2>{myIncome}</div>
        <div id ="expense"><h2>Expenses:</h2>{myExpense}</div>
        </div>
        <h3>Balance</h3>
        <h3>{myBalance}</h3>
      </div>
    );
  }
}

export default App;
