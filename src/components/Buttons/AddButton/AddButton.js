import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import addIcon from '../../../assets/icons/add.svg'

export const AddButton = ({ onClick }) => (
  <Wrapper data-testid="addButton" onClick={onClick}>
    <img src={addIcon} alt="Add new todo" />
  </Wrapper>
)

AddButton.defaultProps = {
  onClick: () => null,
}

AddButton.propTypes = {
  onClick: PropTypes.func,
}

const Wrapper = styled.div`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: center;
  margin-left: auto;
  transition: all 0.3s ease-in-out;
  width: 24px;

  :hover {
    background-color: rgba(242, 242, 242, 1);
  }
`
