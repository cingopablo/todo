/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import Todo from '../components/Todo'
import useArray from '../hooks/useArray'
import useInput from '../hooks/useInput'
import Header from '../components/Header'
import { H3 } from '../styles/TextStyles'

export default function App() {
  const [todo, setTodo, resetTodo] = useInput('')
  const todos = useArray([])

  const onSubmit = event => {
    event.preventDefault()
    todos.addItem(todo)
  }

  return (
    <Wrapper>
      <Header todos={todos} todo={todo} handleSubmit={onSubmit} />
      <ContentWrapper>
        {todos.list.length > 0 ? (
          <ListWrapper>
            {console.log('TODOS: ', todos)}
            {todos.list.map(el => (
              <Todo key={el.id} todo={el} todos={todos} />
            ))}
          </ListWrapper>
        ) : (
          <EmptyWrapper>no hay nada</EmptyWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  )
}

const ContentWrapper = styled.div`
  display: grid;
`

const Wrapper = styled.div`
  width: 600px;
  height: 60vh;
  border: 2px solid transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  padding-top: 1em;
`
