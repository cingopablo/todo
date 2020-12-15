import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ToggleButton = ({ isCompleted, handleToggle }) => (
  <Wrapper isCompleted={isCompleted} onClick={handleToggle} />
)

ToggleButton.defaultProps = {
  handleToggle: () => null,
  isCompleted: false,
}

ToggleButton.propTypes = {
  handleToggle: PropTypes.func,
  isCompleted: PropTypes.bool,
}

const Wrapper = styled.div`
  border: 1px solid
    ${({ isCompleted }) =>
      isCompleted ? 'rgba(255, 96, 92, 1)' : 'rgba(197, 197, 197, 1)'};
  border-radius: 50%;
  height: 20px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 20px;

  &::after {
    background-color: rgba(255, 96, 92, 1);
    border-radius: 50%;
    content: '';
    height: 13px;
    left: 50%;
    opacity: ${({ isCompleted }) => (isCompleted ? 1 : 0)};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
  }
`
