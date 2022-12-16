import React from 'react'
import './serviceCard.css'

const ServiceCard = ({icon, title, description}) => {
  return (
    <div className='service_card'>
        <img src={icon} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceCard