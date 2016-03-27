import React from 'react'

export default class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {toggle: false}
  }
  toggle () {
    this.setState({toggle: !this.state.toggle})
  }
  render () {
    return (
      <div>
        <h1 className="cblue">Hello World!</h1>
        <p>{`Toggled: ${this.state.toggle}`}</p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
