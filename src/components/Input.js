import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Input = ({ onKeyDown, onChange, text }) => (
  <Wrapper
    autoFocus
    onKeyDown={event => onKeyDown(event)}
    onChange={event => onChange(event.target.value)}
    value={text}
  />
)

Input.defaultProps = {
  onChange: () => null,
  onKeyDown: () => null,
  text: '',
}

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  text: PropTypes.string,
}

const Wrapper = styled.input`
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 10px;
  padding: 0.5em 0.8em;
  transition: 0.3s ease-out;
  width: -webkit-fill-available;

  :focus {
    outline: none !important;
    border: 1px solid rgba(0, 0, 0, 1);
  }
`
