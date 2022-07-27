import React from 'react'
import './CreateBtn.scss'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function CreateBtn() {
  return (
    <Link to="/add-product">
      <div className="create-container">
        <IoMdAdd />
      </div>
    </Link>
  )
}
