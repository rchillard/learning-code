import React, { Component } from "react";
import Todo from "./Todo.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Walk fish", "Trim sea cabbage", "Replace bubbler"]
    };
  }
  render() {
    const items = this.state.items.map((item, index) => (
      <Todo key={index} text={item} />
    ));
    return (
      <div style={{ textAlign: "left", margin: "0 auto" }}>
        <ol>{items}</ol>
      </div>
    );
  }
}

export default List;
