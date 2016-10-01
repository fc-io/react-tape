import React from 'react'
import {css} from 'aphrodite/no-important'
import styles from './hello.styles'

export default class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {toggle: false}
  }
  toggle() {
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    return (
      <div>
        <h1 className={css(styles.cblue)}>Hello World!</h1>
        <p>{`Toggled: ${this.state.toggle}`}</p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
