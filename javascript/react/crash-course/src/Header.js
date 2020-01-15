import React, { Component } from 'react'

export class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h1>{this.props.courseName}</h1>
        <h1>{this.props.dateOfEvent}</h1>
      </div>
    )
  }
}
