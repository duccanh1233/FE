import React from 'react'
import './Header.css'
import IMAGES from '../img/index1'
export default function Header() {
  return (
   <div>
    <div className="Herder">
      <div className="item1">
        <div className="title">Smart Home</div>
        <div className="time">Time</div>
        <div className="day">Date</div>
      </div>
      <div className="item2">
        <div className="btn-out">  
        <img src={IMAGES.header}alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
