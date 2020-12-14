/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

export default function Todo({
  todo: { id, text, isEdit },
  handleToggle,
  handleRemove,
  handleUpdate,
}) {
  return (
    <Wrapper>
      <div onClick={() => handleToggle(id)}>Action</div>
      <div>
        {isEdit ? (
          <input
            id="todo"
            onChange={event => handleUpdate(id, event.target.value)}
            value={text}
          />
        ) : (
          text
        )}
      </div>
      <div onClick={() => handleRemove(id)}>remove</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50px auto 50px;
  gap: 1em;
  padding: 1em 1.5em;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
`
