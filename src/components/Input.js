import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Input({ handleEnter, handleUpdate, id, text }) {
  return (
    <Wrapper
      autoFocus
      id="todo"
      onKeyDown={event => handleEnter(event)}
      onChange={event => handleUpdate(id, event.target.value)}
      value={text}
    />
  )
}

Input.defaultProps = {
  handleEnter: () => null,
  handleUpdate: () => null,
  id: '',
  text: '',
}

Input.propTypes = {
  handleEnter: PropTypes.func,
  handleUpdate: PropTypes.func,
  id: PropTypes.string,
  text: PropTypes.string,
}

const Wrapper = styled.input`
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 10px;
  padding: 0.5em 0.8em;
  width: -webkit-fill-available;
  transition: 0.3s ease-out;

  :focus {
    outline: none !important;
    border: 1px solid rgba(0, 0, 0, 1);
  }
`
