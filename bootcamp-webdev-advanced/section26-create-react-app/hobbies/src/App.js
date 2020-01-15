import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: "Tim",
          hobbies: ["sailing", "react"]
        },
        {
          name: "Matt",
          hobbies: ["math", "d3"]
        },
        {
          name: "Colt",
          hobbies: ["css", "hiking"]
        },
        {
          name: "Elie",
          hobbies: ["music", "es2015"]
        }
      ]
    };

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    setTimeout(() => {
      let chosenInstructor = getRandomInt(4);
      let chosenHobbie = getRandomInt(2);
      this.setState(state => {
        let x = delete state.instructors[chosenInstructor].hobbies[
          chosenHobbie
        ];
        return Object.assign({}, x);
        // return state.instructors.map(
        //   instructor => if(instructor.name = `${instructor.name}2`)
        // );
      });
    }, 3000);
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>{instructors}</ul>
      </div>
    );
  }
}

export default App;
