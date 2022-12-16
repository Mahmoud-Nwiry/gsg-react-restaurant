import React from 'react'
import './offer.css'

import Container from '../../components/container'
import Image from '../../assets/offer.png'
import Button from '../../components/Button'

const Offer = () => {
  return (
    <section className='offer'>
        <Container>
            <div className="content">
                <img src={Image} alt="offer roll" />\

                <div className="text">
                    <h2>Come join us for a lunch this weekend and enjoy</h2>
                    <p className="under_title">FLAT 10% OFF</p>
                    <Button text="Book Table" />
                </div>

                <img src={Image} alt="offer roll" />
            </div>
        </Container>
    </section>
  )
}

export default Offer