import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

// functional Component
const Header = ({ title }) => {
  return (
    <header className="headerStyle">
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

// css in js
const headingStyle = {
  color: 'teal',
}

Header.defaultProps = {
  title: 'The React!',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
