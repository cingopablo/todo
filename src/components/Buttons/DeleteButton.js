import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import deleteIcon from '../../assets/icons/delete.svg'
import { SmallText2 } from '../../styles/TextStyles'

export const DeleteButton = ({ handleRemove }) => (
  <Wrapper onClick={handleRemove}>
    <img src={deleteIcon} alt="Delete todo" />
    <Text>Delete</Text>
  </Wrapper>
)

DeleteButton.defaultProps = {
  handleRemove: () => null,
}

DeleteButton.propTypes = {
  handleRemove: PropTypes.func,
}

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(255, 96, 92, 1);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0.8em;
  transition: 0.5s ease-out;

  :hover {
    box-shadow: 0px 10px 20px rgba(191, 20, 20, 0.25),
      rgba(0, 0, 0, 0.1) 0px 1px 5px,
      rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;
  }
`

const Text = styled(SmallText2)`
  color: white;
`
