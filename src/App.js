import React, { Component } from "../node_modules/react";
import "./App.css";
import AddEntryComponent from "./components/AddEntryComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transList: [],
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
    let myBalance = 0;
    const myIncome = this.state.transList
      .filter(element => element.type === "income")
      .map((element, i) => {
        myBalance += Number(element.amount);
        return (
          <div key={element.description + "-" + i}>
            <span>{element.description}</span>
            <span>{element.amount}</span>
            <span>
              {" "}
              {element.date}
              {element.time}
            </span>
          </div>
        );
      });

    const myExpense = this.state.transList
      .filter(element => element.type === "expense")
      .map((element, i) => {
        myBalance -= Number(element.amount);
        return (
          <div key={element.description + "-" + i}>
            <span>{element.description}</span>
            <span>{element.amount}</span>
            <span>
              {" "}
              {element.date}
              {element.time}
            </span>
          </div>
        );
      });
    console.log(this.state);
    return (
      <div className="App">
        <div className="title">Account Balance Tracker</div>
        <AddEntryComponent passToList={this.passToList} />
        <div id="lists">
          <div id="income">
            <h2>Income:</h2>
            {myIncome}
          </div>
          <div id="expense">
            <h2>Expenses:</h2>
            {myExpense}
          </div>
        </div>
        <div className="balance">Balance </div>
        <div className="balance-number">{myBalance}</div>
      </div>
    );
  }
}

export default App;
