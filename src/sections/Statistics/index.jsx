import React from 'react'
import './statistics.css'
import Container from '../../components/container'
import StatisticBox from '../../components/StatisticBox'

import Desh from '../../assets/staDesh.svg'
import Chef from '../../assets/staChef.svg'
import Team from '../../assets/staTeam.svg'

const data = [
    {
        id : 1,
        icon : Desh,
        number : 250,
        text : 'Delicacy'
    },
    {
        id : 2,
        icon : Chef,
        number : 10,
        text : 'Renowed chefs'
    },
    {
        id : 3,
        icon : Team,
        number : 30,
        text : 'Members'
    },
]

const Statistics = () => {
  return (
    <section className='statistics'>
        <Container>
            <div className="content">
                {
                    data.map(item => <StatisticBox key={item.id} icon={item.icon} number={item.number} text={item.text} />)
                }
            </div>
        </Container>
    </section>
  )
}

export default Statistics