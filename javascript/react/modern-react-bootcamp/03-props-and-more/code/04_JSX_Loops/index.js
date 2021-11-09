const arrayOfFruit = ["🍒", "🍊", "🍇"];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Fruit Stand</h1>
        <Friend
          name="Bob"
          hobbies={["Singing", "Dancing", "Jazz Flute"]}
          fruit="🍒"
        />
        <Friend
          name="Sara"
          hobbies={["Drumming", "Painting", "Flying"]}
          fruit="🍊"
        />
        <Friend />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))