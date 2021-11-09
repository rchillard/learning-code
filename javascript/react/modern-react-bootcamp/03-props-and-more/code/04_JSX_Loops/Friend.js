// function hobbyHTML(arr) {
//   return arr.map(h => <li> h </li>);
// }

class Friend extends React.Component {
  static defaultProps = {
    name: "human name",
    hobbies: ["Eating", "Breathing", "Sleeping"],
    fruit: "🍇"
  }
  
  render() {
    const { name, hobbies, fruit } = this.props;
    return (
      <div>
        <p>My name is {name}, and I like to do the following hobbies:</p>
        <ul>
          { hobbies.map(h => <li>{h}</li>) }
        </ul>
        <p>My favorite fruit is {fruit}</p>
      </div>
    )
  }
}