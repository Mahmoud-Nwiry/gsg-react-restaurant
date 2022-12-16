import React from 'react'
import Button from '../../components/Button'
import Container from '../../components/container'
import Navbar from '../../components/Navbar'


import './landing.css'

const Landing = () => {
  return (
    <header className='landing'>
        <div className='layer'></div>
        <Container>
            <Navbar />
            <div className='greeting'>
                <h1>Welcome To Golden View Dine</h1>
                <p>Explore the authentic vegan dishes with your friends and family</p>
                <Button text="Read more" />
            </div>
        </Container>
    </header>
  )
}

export default Landing