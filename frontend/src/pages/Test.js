import React, { Component } from 'react'
import Div from 'react-bootstrap/esm/Container'

export default class Test extends Component {
  constructor(props) {
    super()
    this.state = {
      name: 'Collins'
    }
  }
  render() {

    return (
      <Div>
        <h1>
          {this.state.name}
        </h1>
      </Div>
    )
  }
}
