class App extends React.Component {
  render() {
    return (
      <div>Slot Machines
        <Machine />
        <Machine />
        <Machine />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))