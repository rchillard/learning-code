// This is a controlled component (because we are capturing input)
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["Walk fish", "Trim sea cabbage", "Replace bubbler"],
      inputText: ""
    };
  }

  render() {
    const items = this.state.data.map(item => <li>{item}</li>);

    return (
      <div>
        Enter Todo Item
        <form
          onSubmit={e => {
            e.preventDefault();
            const data = [...this.state.data, this.state.inputText];
            console.log(data);
            this.setState({ data, inputText: "" });
          }}
        >
          <input
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
        <ol>{items}</ol>
      </div>
    );
  }
}

export default Form;
