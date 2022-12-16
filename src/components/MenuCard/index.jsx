import React from 'react'
import './menuCard.css'

const MenuCard = ({image, name, description, price}) => {
  return (
    <div className='menu_card'>
        <div className="image">
            <img src={image} alt={name} />
        </div>
        <div className="text">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
        <span className="line"></span>
        <h3>{price}</h3>
    </div>
  )
}

export default MenuCard