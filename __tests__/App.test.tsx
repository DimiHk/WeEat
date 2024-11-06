import 'react-native'
import React from 'react'
import App from '../App'

import {expect, it} from '@jest/globals'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toHaveProperty('nonExistentProperty')
})
