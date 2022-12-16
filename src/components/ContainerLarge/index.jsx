import React from 'react'
import './containerLarge.css'

const ContainerLarge = ({children}) => {
  return (
    <div className='container_large'>
        {children}
    </div>
  )
}

export default ContainerLarge