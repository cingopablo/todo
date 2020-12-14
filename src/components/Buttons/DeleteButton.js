import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import deleteIcon from '../../assets/icons/delete.svg'
import { SmallText2 } from '../../styles/TextStyles'

export default function DeleteButton({ handleRemove }) {
  return (
    <Wrapper onClick={handleRemove}>
      <img src={deleteIcon} alt="Delete todo" />
      <Text>Delete</Text>
    </Wrapper>
  )
}

DeleteButton.defaultProps = {
  handleRemove: () => null,
}

DeleteButton.propTypes = {
  handleRemove: PropTypes.func,
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.8em;
  border-radius: 10px;
  background-color: rgba(224, 95, 89, 1);
  //background-color: rgba(223, 94, 88, 1);
  cursor: pointer;
  transition: 0.5s ease-out;

  :hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

const Text = styled(SmallText2)`
  color: white;
`
