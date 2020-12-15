import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2 } from '../styles/TextStyles'
import { AddButton } from './Buttons/AddButton/AddButton'

export const Header = ({ list, handleSubmit }) => {
  const openTodos = () => list.filter(el => !el.isCompleted).length

  return (
    <Wrapper>
      <AddButton onClick={handleSubmit} />
      <TextWrapper>
        <Title>Todos</Title>
        <Title>{openTodos()}</Title>
      </TextWrapper>
    </Wrapper>
  )
}

Header.defaultProps = {
  handleSubmit: () => null,
  list: [],
}

Header.propTypes = {
  handleSubmit: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
}

const Wrapper = styled.div`
  backdrop-filter: blur(40px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px 20px 0 0;
  height: fit-content;
  padding: 1em 1.5em 1em;
  width: 100%;
`

const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 1.5em;
`

const Title = styled(H2)`
  color: #2193b0;
`
