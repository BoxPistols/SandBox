import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

// functional Component
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'The React!',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
