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
    this.newItem = this.newItem.bind(this);
  }
  newItem(e, other) {
    e.preventDefault();
    if (document.getElementById('desc').value !== "" && document.getElementById('amnt').value !== 0 ){
    const date = new Date();
    const myDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const myTime = date.getHours() + ':' + ('0'+ date.getMinutes()).slice(-2);
    const myTrans = {
        description: other.description,
        amount: other.amount,
        type: other.type,
        date: myDate,
        time: myTime
      }
      this.setState({
        transList: [...this.state.transList, myTrans]
      });  
    }
      document.getElementById('desc').value ="";
      document.getElementById('amnt').value =0;
  }

  render() {
    console.log(this.state.transList);

    let myBalance = 0
    const myIncome = this.state.transList.filter(element => element.type === 'income').map((element) => {
      myBalance += Number(element.amount);
       return (<div key = {Date.now()} ><span>{element.description}</span><span>{element.amount}</span><span> {element.date}{element.time}</span></div>)
    });

    const myExpense = this.state.transList.filter(element => element.type === 'expense').map((element) => {
      myBalance -= Number(element.amount);
      return (<div key = {Date.now()} ><span>{element.description}</span><span>{element.amount}</span><span> {element.date}{element.time}</span></div>)
    });

    console.log(myBalance);

    return (
      <div className="App">
        <h1>Account Balance Tracker</h1>
        <AddEntryComponent newItem={this.newItem} />

        <div id ="income">Income:{myIncome}</div>

        <div id ="expense">Expenses:{myExpense}</div>
        
        <div>Balance</div>
        <div>{myBalance}</div>
      </div>
    );
  }
}

export default App;
