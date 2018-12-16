import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  render() {
    const { title, image } = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
    const instructions = this.props.instructions.map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ));
    return (
      <div className="Recipe">
        <img src={image} alt={title} />
        <h3>{title} Recipe</h3>
        <h4>Ingredients</h4>
        <ul>{ingredients}</ul>
        <h4>Instructions</h4>
        <ol>{instructions}</ol>
      </div>
    );
  }
}

export default Recipe;
