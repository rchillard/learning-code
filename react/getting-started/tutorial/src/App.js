import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
    data: []
  };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters, data } = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return (
      <div className="container">
        <h1>Hello, Reactbots!</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <h2>Sample lifecycle method response</h2>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;
