import React from 'react'
import './subscribe.css'
import Email from '../../assets/email-outline.png'
import Container from '../container'
import Button from '../Button'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <Container>
            <div className="content">
                <div className="text">
                    <img src={Email} alt="email outline" />
                    <p>Subscribe to our Newsletter</p>
                </div>
                <form action="">
                    <input type="text" placeholder='Your Email Id' />
                    <Button text="Subscribe" />
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Subscribe