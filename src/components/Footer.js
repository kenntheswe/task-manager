import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2021 Kenn's. All Rights Reserved.</p>
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
