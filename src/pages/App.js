import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Todo } from '../components/Todo'
import { Header } from '../components/Header'
import { BodyIntro } from '../styles/TextStyles'
import { actions, TODO_LOAD } from './AppActions'

function App({ list }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const storedData = localStorage.getItem('todoList')
    if (storedData !== null) {
      dispatch({ type: TODO_LOAD, payload: { list: JSON.parse(storedData) } })
    }
  }, [])

  return (
    <Wrapper>
      <Header
        list={list}
        handleSubmit={() => actions.addTODO(dispatch, list, 'click')}
      />
      <ContentWrapper>
        {list.length > 0 ? (
          <ListWrapper>
            {list.map(todo => (
              <Todo key={todo.id} list={list} todo={todo} actions={actions} />
            ))}
          </ListWrapper>
        ) : (
          <EmptyWrapper>There are no more items to do</EmptyWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  )
}

const mapStateToProps = ({ main: { list } }) => ({
  list,
})

export default connect(mapStateToProps)(App)

App.defaultProps = {
  list: [],
}

App.propTypes = {
  list: PropTypes.array,
}

const ContentWrapper = styled.div`
  background: white;
  border-radius: 0 0 20px 20px;
  display: grid;
  height: calc(60vh - 120px);
  overflow-y: auto;
`

const Wrapper = styled.div`
  border: 2px solid transparent;
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  height: 60vh;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;

  @media (max-width: 450px) {
    height: 100vh;
    width: 100%;
  }
`

const EmptyWrapper = styled(BodyIntro)`
  color: rgba(188, 188, 188, 1);
  padding-top: 2em;
  text-align: center;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  padding-top: 1em;
`
