import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ margin: "0 auto", textAlign: "center", width: "300px" }}
      >
        <Form />
      </div>
    );
  }
}

export default App;
