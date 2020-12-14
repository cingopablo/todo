/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Todo from '../components/Todo'
import useArray from '../hooks/useArray'
import useInput from '../hooks/useInput'
import Header from '../components/Header'
import { H1, H2, H3 } from '../styles/TextStyles'

export default function App() {
  const [todo, setTodo, resetTodo] = useInput('')
  const todos = useArray([])

  const onSubmit = event => {
    event.preventDefault()
    // if (todo === '') return
    todos.addItem(todo)
    // resetTodo()
  }

  return (
    <Wrapper>
      <Header todos={todos} todo={todo} handleSubmit={onSubmit} />
      {/*
      <form onSubmit={onSubmit}>
        <Title>Todos</Title>
        <br />
        <input id="todo" onChange={setTodo} value={todo} />
        <button type="submit" disabled={todo.trim() === ''}>
          Add
        </button>
      </form>
      */}
      <ContentWrapper>
        {todos.list.length > 0 ? (
          <ListWrapper>
            {todos.list.map(el => (
              <Todo
                key={el.id}
                todo={el}
                handleUpdate={todos.updateItem}
                handleToggle={todos.toggleItem}
                handleRemove={todos.removeItem}
              />
            ))}
          </ListWrapper>
        ) : (
          <EmptyWrapper>no hay nada</EmptyWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  )
}

const Title = styled(H2)``

const ContentWrapper = styled.div`
  display: grid;
  //background-color: blue;
`

const Wrapper = styled.div`
  width: 600px;
  height: 60vh;
  // background: rgba(255, 255, 255, 0.3);
  border: 2px solid transparent;
  //backdrop-filter: blur(40px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //padding: 2.5em 1.5em;
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
`

const EmptyWrapper = styled(H3)`
  color: rgba(188, 188, 188, 1);
  font-weight: initial;
  text-align: center;
  margin: auto 0;
`

const ListWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: auto;
  gap: 1em;
`
