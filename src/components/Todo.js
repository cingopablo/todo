/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import DeleteButton from './Buttons/DeleteButton'
import ToggleButton from './Buttons/ToggleButton'

export default function Todo({
  todo: { id, text, isCompleted, isEdit },
  handleAdd,
  handleToggle,
  handleRemove,
  handleUpdate,
}) {
  const handleEnter = event => {
    if (event.keyCode === 13) {
      handleAdd()
    }
  }

  return (
    <Wrapper>
      <ToggleButton
        isCompleted={isCompleted}
        handleToggle={() => handleToggle(id)}
      >
        Action
      </ToggleButton>
      <div>
        {isEdit ? (
          <input
            style={{ height: '100%' }}
            autoFocus
            id="todo"
            onKeyDown={event => handleEnter(event)}
            onChange={event => handleUpdate(id, event.target.value)}
            value={text}
          />
        ) : (
          text
        )}
      </div>
      <DeleteButton handleRemove={() => handleRemove(id)} />
    </Wrapper>
  )
}
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 40px auto 100px;

  padding: 0 1.5em 0.5em;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  opacity: 0;
  animation: ${animation} 0.3s forwards;
`
