import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe.js";
import "./Recipes.css";

class Recipes extends Component {
  static defaultProps = {
    recipes: []
  };

  render() {
    const recipes = this.props.recipes.map((recipe, index) => (
      <Recipe key={index} {...recipe} />
    ));
    return <div className="Recipes">{recipes}</div>;
  }
}

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Recipes;
