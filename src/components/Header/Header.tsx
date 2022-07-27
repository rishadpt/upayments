import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/" >
        <h3>Upayments Store</h3>
      </Link>
        <h3>Register</h3>
    </div>
  )
}
