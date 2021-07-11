import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click!")
  }

  return (
    <header className="header">
      <h1>{title}</h1> 
      <Button text="Add" color="hsl(158, 64%, 52%)" onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: "Task Manager"
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
