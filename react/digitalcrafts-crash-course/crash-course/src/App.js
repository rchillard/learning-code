import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './Header'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      tasks: []
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.saveTodoListItem = this.saveTodoListItem.bind(this)
  }

  handleTextChange (event) {
    // console.log(event.target.value)
    this.setState({
      inputValue: event.target.value
    })
  }

  saveTodoListItem () {
    console.log('save test')
    console.log(this.state.inputValue)
    this.setState({
      ...this.state,
      tasks: this.state.tasks.concat(this.state.inputValue)
    })
  }

  render () {
    return (
      <div>
        Content
        <img src={logo} className='App-logo' alt='logo' />
        <Header courseName='Introduction to JavaScript'
          dateOfEvent='03/20/2018' />

        <input type='text' onChange={this.handleTextChange} />
        <button onClick={this.saveTodoListItem}>Save</button>
      </div>
    )
  }
}

export default App
