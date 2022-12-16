import React from 'react'
import About from '../../sections/About'
import Blog from '../../sections/Blog'
import Footer from '../../sections/Footer'
import Ingredients from '../../sections/Ingredients'
import Landing from '../../sections/Landing'
import Menu from '../../sections/Menu'
import Offer from '../../sections/offer'
import Reviews from '../../sections/Reviews'
import Services from '../../sections/Services'
import Statistics from '../../sections/Statistics'

const Home = () => {
  return (
    <main>
        <Landing />
        <About />
        <Services />
        <Menu />
        <Offer />
        <Ingredients />
        <Statistics />
        <Reviews />
        <Blog />
        <Footer />
    </main>
  )
}

export default Home