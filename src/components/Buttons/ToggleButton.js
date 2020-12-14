import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function ToggleButton({ isCompleted, handleToggle }) {
  return <Wrapper isCompleted={isCompleted} onClick={handleToggle} />
}

ToggleButton.defaultProps = {
  isCompleted: false,
  handleToggle: () => null,
}

ToggleButton.propTypes = {
  isCompleted: PropTypes.bool,
  handleToggle: PropTypes.func,
}

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid
    ${({ isCompleted }) => (isCompleted ? 'red' : 'rgba(197, 197, 197, 1)')};
  position: relative;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: '';

    opacity: ${({ isCompleted }) => (isCompleted ? 1 : 0)};
    //visibility: ${({ isCompleted }) => (isCompleted ? 'visible' : 'hidden')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: red;
  }
`
