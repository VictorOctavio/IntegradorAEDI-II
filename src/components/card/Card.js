import React from 'react'
import './card.css'

//Icon Ball
import {IoMdBasketball} from 'react-icons/io'

export const Card = ({item}) => {
  return(
    <div className="card cardd" style={{background: 'rgb(0, 0, 0, 0.233)'}}>
      
      <div className="card-header">
        <IoMdBasketball/>
      </div>

      <div className="card-body">
          <h3>{item.title}</h3>
      </div>

    </div>
   )

 }