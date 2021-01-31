// import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ color, text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
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
  onClick: PropTypes.func,
}

export default Btn
