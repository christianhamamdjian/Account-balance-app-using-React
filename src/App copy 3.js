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
    const myIncome = this.state.transList.filter(element => element.type === 'income').map((element) => {
      myBalance += Number(element.amount);
       return (<div key = {Date.now()} ><span>{element.description}</span><span>{element.amount}</span><span> {element.date}{element.time}</span></div>)
    });

    const myExpense = this.state.transList.filter(element => element.type === 'expense').map((element) => {
      myBalance -= Number(element.amount);
      return (<div key = {Date.now()} ><span>{element.description}</span><span>{element.amount}</span><span> {element.date}{element.time}</span></div>)
    });

    return (
      <div className="App">
        <h1>Account Balance Tracker</h1>
        <AddEntryComponent passToList={this.passToList} />

        <div id ="income">Income:{myIncome}</div>

        <div id ="expense">Expenses:{myExpense}</div>
        
        <div>Balance</div>
        <div>{myBalance}</div>
      </div>
    );
  }
}

export default App;
