import React from 'react'
import { AvatarTypes } from '../../../../utils/type'
import './Avatar.scss'

export default function Avatar({avatar,style}:AvatarTypes) {
  return (
    <div style={{width:`${style}`}} className="card_image">
    <img src={avatar} alt=""/>
</div>
  )
}
