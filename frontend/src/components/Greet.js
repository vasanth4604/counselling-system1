import React, { Component } from 'react'

class Greet extends Component {
  render() {
    return (
      <div><h1><center>Welcome to class components </center></h1>
      <h2><center>{this.props.name} with id {this.props.id}</center></h2>
      </div>
    )
  }
}

export default Greet