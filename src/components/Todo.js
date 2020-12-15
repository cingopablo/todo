/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import DeleteButton from './Buttons/DeleteButton'
import ToggleButton from './Buttons/ToggleButton'
import Input from './Input'

export default function Todo({
  todo: { id, text, isCompleted, isEdit },
  todos: { addItem, updateItem, toggleItem, removeItem, editItemOff },
}) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleEnter = event => {
    if (event.keyCode === 13) {
      editItemOff(id)
      setTimeout(() => {
        addItem()
      }, 300)
    }
  }

  const handleRemove = () => {
    setIsDeleting(true)
    setTimeout(() => {
      removeItem(id)
    }, 250)
  }

  return (
    <Wrapper isDeleting={isDeleting}>
      <ToggleButton
        isCompleted={isCompleted}
        handleToggle={() => toggleItem(id)}
      >
        Action
      </ToggleButton>
      <div>
        {isEdit ? (
          <Input
            handleEnter={handleEnter}
            handleUpdate={updateItem}
            id={id}
            text={text}
          />
        ) : (
          text
        )}
      </div>
      <DeleteButton handleRemove={handleRemove} />
    </Wrapper>
  )
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
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 20px auto 100px;
  gap: 1em;

  padding: 0 1.5em 0.5em;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  opacity: 0;
  animation: ${({ isDeleting }) => (isDeleting ? animationOut : animationIn)}
    0.25s forwards;
`
