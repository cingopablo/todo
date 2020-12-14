import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import addIcon from '../../assets/icons/add.svg'

export default function AddButton({ onClick, isActive }) {
  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      <img src={addIcon} alt="Add new todo" />
    </Wrapper>
  )
}

AddButton.defaultProps = {
  onClick: () => null,
  isActive: true,
}

AddButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  margin-left: auto;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isActive }) => isActive && 'rgba(242, 242, 242, 1)'};

  :hover {
    background-color: rgba(242, 242, 242, 1);
  }
`
