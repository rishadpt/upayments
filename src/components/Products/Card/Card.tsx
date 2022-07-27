import React from 'react'
import { Link } from 'react-router-dom'
import { ProductTypes } from '../../../utils/type'
import Avatar from './Avatar/Avatar'
import './Card.scss'

export default function Card({ name, price, image, id }: ProductTypes) {
  return (
    <Link className="card-container" to={`/products/${id}`}>
      <Avatar avatar={image ? image :"No Image Found"} />
      <div id={id} className="card_info">
        <h3>{name}</h3>
        <p>$ {price}</p>
      </div>
    </Link>
  )
}
