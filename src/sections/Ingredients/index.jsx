import React from 'react'
import './ingredients.css'
import Image from '../../assets/ingredients.png'

import ContainerLarge from '../../components/ContainerLarge'
import Button from '../../components/Button'

const Ingredients = () => {
  return (
    <section className='ingredients'>
        <ContainerLarge>
            <div className="content">
                <div className="text">
                    <h2>Cooking ingredients</h2>
                    <p className="under_title">What goes in</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p>
                    <Button text="Read more" />
                </div>
                <div className="image">
                    <img src={Image} alt='ingredients' />
                </div>
            </div>
        </ContainerLarge>
    </section>
  )
}

export default Ingredients