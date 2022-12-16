import React from 'react'
import './links.css'

import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Youtube from '../../assets/youtube.svg'
import Logo from '../../assets/Logo.svg'
import Email from '../../assets/email.png'
import Location from '../../assets/location.png'
import Phone from '../../assets/phone.png'
import Container from '../container'

const Links = () => {
  return (
    <section className='footer_links'>
        <Container>
            <div className="content">

            <article className='info'>
                <img className='logo' src={Logo} alt="logo" />
                <h3>Golden View Dine </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <ul className="social">
                    <li><a hred="#"><img src={Instagram} alt="Instagram" /></a></li>
                    <li><a hred="#"><img src={Twitter} alt="Instagram" /></a></li>
                    <li><a hred="#"><img src={Youtube} alt="Instagram" /></a></li>
                </ul>
            </article>

            <article className='links'>
                <h3>Other Links</h3>
                <ul className="links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & conditions</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">our team</a></li>
                    <li><a href="#">Our kitchen</a></li>
                </ul>
            </article>

            <article className='contact'>
                <h3>Contact Us</h3>
                <ul className="contact_list">
                    <li><div className='image'><img src={Email} alt="email" /></div> <span>Gogreendineservice@gmail.com</span></li>
                    <li><div className='image'><img src={Location} alt="location" /></div> <span>AZ complex bylane3 Mandari <br/> Rd Mumbai 1100867 </span></li>
                    <li><div className='image'><img src={Phone} alt="phone" /></div> <span>+1800 287 256</span></li>
                </ul>
            </article>

            </div>
        </Container>
    </section>
  )
}

export default Links