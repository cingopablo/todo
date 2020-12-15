/* eslint-disable */
import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from './Input'

function TestInput() {
  const [text, setText] = useState('')

  const handleChange = value => {
    setText(value)
  }

  return (
    <Input
      data-testid="input"
      onChange={value => handleChange(value)}
      text={text}
    />
  )
}

const setup = () => {
  const utils = render(<TestInput />)
  const input = utils.getByTestId('input')
  return {
    input,
    ...utils,
  }
}

describe('Input', () => {
  test('It should render', () => {
    const { getByTestId } = render(
      <Input onChange={() => null} onKeyDown={() => null} text="" />
    )
    const input = getByTestId('input')
    expect(input).toBeInTheDocument()
  })

  test('It should write the number 23', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })
})
