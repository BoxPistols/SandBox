import React from 'react'
import './App.css'

// functional Component
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

// class
// class Header extends React.Component {
//     render() {
//         return <h1>Class Component</h1>
//     }
// }

Header.defaultProps = {
  title: 'The React',
}

export default Header
