import React from 'react'
import test from 'blue-tape'
import {shallow} from 'enzyme'
import Hello from '../../app/components/hello'

test('hello component to contain a Hello World message', t => {
  const helloComponent = shallow(<Hello />)

  t.ok(helloComponent.text().indexOf('Hello World') > -1)
  t.end()
})

test('hello component button to toggle toggle-message', t => {
  const helloComponent = shallow(<Hello />)

  helloComponent.find('button').simulate('click')
  t.deepEqual(helloComponent.find('p').text(), 'Toggled: true')

  helloComponent.find('button').simulate('click')
  t.deepEqual(helloComponent.find('p').text(), 'Toggled: false')

  t.end()
})
