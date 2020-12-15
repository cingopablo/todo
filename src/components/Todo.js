import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { useDispatch } from 'react-redux'

import { DeleteButton } from './Buttons/DeleteButton'
import { ToggleButton } from './Buttons/ToggleButton'
import { Input } from './Input'

export const Todo = ({
  actions: { updateTODO, removeTODO, toggleTODO, addTODO },
  list,
  todo: { id, text, isCompleted, isEdit },
}) => {
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <Wrapper isDeleting={isDeleting}>
      <ToggleButton
        handleToggle={() => toggleTODO(dispatch, id)}
        isCompleted={isCompleted}
      >
        Action
      </ToggleButton>
      <TextWrapper isCompleted={isCompleted}>
        {isEdit ? (
          <Input
            onChange={value => updateTODO(dispatch, id, value)}
            onKeyDown={event => addTODO(dispatch, list, event)}
            text={text}
          />
        ) : (
          text
        )}
      </TextWrapper>
      <DeleteButton
        handleRemove={() => removeTODO(setIsDeleting, dispatch, id)}
      />
    </Wrapper>
  )
}

Todo.defaultProps = {
  actions: {},
  list: [],
  todo: {},
}

Todo.propTypes = {
  actions: PropTypes.object,
  list: PropTypes.array,
  todo: PropTypes.object,
}

const animationIn = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const animationOut = keyframes`
  0% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
  100% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
`

const Wrapper = styled.div`
  align-items: center;
  animation: ${({ isDeleting }) => (isDeleting ? animationOut : animationIn)}
    0.25s forwards;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  display: grid;
  gap: 1em;
  grid-template-columns: 20px auto 100px;
  opacity: 0;
  padding: 0 1.5em 0.5em;
  width: 100%;
`

const TextWrapper = styled.div`
  text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};
`
