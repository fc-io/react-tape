import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Hello from './components/hello'

const rootEl = document.getElementById('root')

if (module.hot) {
  ReactDOM.render(<AppContainer><Hello /></AppContainer>, rootEl)
  module.hot.accept('./components/hello', (t) => {
    System.import('./components/hello').then(({default: NextHello}) => {
      ReactDOM.render(<AppContainer><NextHello /></AppContainer>, rootEl)
    })
  })
} else {
  ReactDOM.render(<Hello />, rootEl)
}
