import React from 'react'
import './services.css'

import OrangeJuice from '../../assets/orange-juice.svg'
import Chef from '../../assets/chef.svg'
import Restaurant from '../../assets/restaurant.svg'
import ServiceCard from '../../components/ServiceCard'

const data = [
    {
        id : 1,
        icon : OrangeJuice,
        title : 'Fresh food',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
    },
    {
        id : 2,
        icon : Chef,
        title : 'skilled Chef',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
    },
    {
        id : 3,
        icon : Restaurant,
        title : 'Exotic dishes',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
    },
]

const Services = () => {
  return (
    <section className='services'>
        <h2>Special</h2>
        <p className='under_title'>What makes us special</p>
        <div className="services_box">
            {
                data.map(item => <ServiceCard key={item.id} icon={item.icon} title={item.title} description={item.description} />)
            }
        </div>
    </section>
  )
}

export default Services