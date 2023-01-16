import React, { Component } from 'react'

export default class classComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div>Class Component</div>
    )
  }
}