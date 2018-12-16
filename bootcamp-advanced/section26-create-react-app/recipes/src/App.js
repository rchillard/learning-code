import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="Tomato Pasta"
          image="emiliano-vittoriosi-699338-unsplash.jpg"
          ingredients={["Tomatoes", "Noodles", "Basil"]}
          instructions={[
            "Boil water on the stove",
            "Mash the tomatoes",
            "Chop the fresh basil",
            "Pour noodles into boiling water",
            "Cook for 5-6 minutes",
            "Drain water from noodles",
            "Combine tomatoes and basil in pot with noodles"
          ]}
        />
      </div>
    );
  }
}

export default App;
