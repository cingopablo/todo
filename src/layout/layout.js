import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'
import './layout.css'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainWrapper>{children}</MainWrapper>
  </>
)

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node,
}

const MainWrapper = styled.main`
  background-color: var(--background-color);
  height: 100vh;
  width: 100%;
`
