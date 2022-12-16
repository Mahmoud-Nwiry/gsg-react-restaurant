import React from 'react'
import Button from '../../components/Button'
import Image from '../../assets/about.svg'

import './about.css'
import ContainerLarge from '../../components/ContainerLarge'

const About = () => {
  return (
    <section className='about'>
        <ContainerLarge>
            <div className="content">
                <div className="text">
                    <h2>About Us</h2>
                    <p className='under_title'>Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</p>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
                    <Button text="Read more" />
                </div>
                <div className="image">
                    <img src={Image} alt="about" />
                </div>
            </div>
        </ContainerLarge>
    </section>
  )
}

export default About