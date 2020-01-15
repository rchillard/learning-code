import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

class Navbar extends Component {
  static defaultProps = {
    brand: "Navbar",
    items: ["Item 1", "Item 2", "Item 3"]
  };

  render() {
    const { brand } = this.props;
    const items = this.props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div className="Navbar">
        <div className="Brand">{brand}</div>
        <div className="Menu">
          <ul>{items}</ul>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  brand: PropTypes.string,
  items: PropTypes.array
};

export default Navbar;
