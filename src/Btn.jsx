// import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ color, text }) => {
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </>
  )
}

Btn.defaultProps = {
  color: 'steelblue',
  text: 'Btn Button',
}

Btn.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}

export default Btn
