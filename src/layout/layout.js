/* eslint react/prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../styles/GlobalStyle'

import './layout.css'

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
