import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import addIcon from '../../assets/icons/add.svg'

export const AddButton = ({ onClick, isActive }) => (
  <Wrapper isActive={isActive} onClick={onClick}>
    <img src={addIcon} alt="Add new todo" />
  </Wrapper>
)

AddButton.defaultProps = {
  isActive: true,
  onClick: () => null,
}

AddButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ isActive }) => !isActive && 'rgba(242, 242, 242, 1)'};
  border-radius: 4px;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
  display: flex;
  height: 24px;
  justify-content: center;
  margin-left: auto;
  pointer-events: ${({ isActive }) => !isActive && 'none'};
  transition: all 0.3s ease-in-out;
  width: 24px;

  :hover {
    background-color: rgba(242, 242, 242, 1);
  }
`
