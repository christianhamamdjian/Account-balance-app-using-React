import React, { Component } from "react";
import "../App.css";

class AddEntryComponent extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      amount: "",
      type: "income"
    };
    this.addDescription = this.addDescription.bind(this);
    this.addAmount = this.addAmount.bind(this);
    this.addType = this.addType.bind(this);
    this.newItem = this.newItem.bind(this);
  }
  newItem(e) {
    e.preventDefault();
    if (this.state.description && this.state.amount) {
      const date = new Date();
      const myDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const myTime =
        date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2);
      const myTrans = {
        description: this.state.description,
        amount: this.state.amount,
        type: this.state.type,
        date: myDate,
        time: myTime
      };
      // Validation goes here
      this.props.passToList(myTrans);
      this.setState({
        description: "",
        amount: ""
      });
    }
  }
  addDescription(newDescription) {
    this.setState({
      description: newDescription
    });
  }
  addAmount(newAmount) {
    this.setState({
      amount: newAmount
    });
  }
  addType(newType) {
    this.setState({ type: newType });
  }

  render() {
    return (
      <div className="entry-form">
        <form className="add-entry">
          <input
            id="desc"
            onChange={e => this.addDescription(e.target.value)}
            value={this.state.description}
            type="text"
            placeholder="Description"
            name="newDescription"
          />

          <input
            id="amnt"
            onChange={e => this.addAmount(e.target.value)}
            value={this.state.amount}
            type="number"
            placeholder="Amount"
            name="newAmount"
          />

          <select onChange={e => this.addType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={e => this.newItem(e)}
            type="submit"
            className="btn btn-add"
          >
            Add Comment
          </button>
        </form>
      </div>
    );
  }
}
export default AddEntryComponent;
