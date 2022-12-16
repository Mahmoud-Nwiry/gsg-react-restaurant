import React from 'react'
import './statisticBox.css'

const index = ({icon, number, text}) => {
  return (
    <div className='statistics_box'>
        <div className="icon">
            <img src={icon} alt={text} />
        </div>
        <div className="numbers">
            <h4>{number}+</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default index