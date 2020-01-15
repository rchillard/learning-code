import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import Recipe from "./Recipe.js";
import Recipes from "./Recipes.js";
import LISTOFRECIPES from "./listofrecipes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          brand="RecipeSaver"
          items={["Create Recipe", "List Recipes", "Search", "Logout"]}
        />
        <Recipes recipes={LISTOFRECIPES} />
      </div>
    );
  }
}

export default App;
