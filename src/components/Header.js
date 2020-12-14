import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2 } from '../styles/TextStyles'
import AddButton from './Buttons/AddButton'

export default function Header({ todo, todos, handleSubmit }) {
  console.log('TODOS: ', todos)
  return (
    <Wrapper>
      <AddButton
        onClick={handleSubmit}
        isActive={todo.text !== '' && todos.length > 0}
      />
      <TextWrapper>
        <Title>Todos</Title>
        <Title>{todos.list.length}</Title>
      </TextWrapper>
    </Wrapper>
  )
}

Header.defaultProps = {
  todos: [],
  todo: {},
  handleSubmit: () => null,
}

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object,
  todos: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
  //background-color: blueviolet;
  //border-radius: inherit;
  height: fit-content;
  width: 100%;
  padding: 1em 1.5em 1em;
`

const TextWrapper = styled.div`
  padding-top: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled(H2)``
