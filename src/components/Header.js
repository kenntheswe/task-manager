import React from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1> 
      {location.pathname === "/" && <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "hsl(0, 100%, 50%)" : "hsl(158, 64%, 52%)"} onClick={onAdd}/>}
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
