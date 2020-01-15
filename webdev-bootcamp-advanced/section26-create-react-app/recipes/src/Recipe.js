import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Recipe.css";

class Recipe extends Component {
  static defaultProps = {
    title: "no recipe name",
    image: "no image supplied",
    ingredients: [],
    instructions: []
  };

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

Recipe.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.array,
  instructions: PropTypes.array
};

export default Recipe;
