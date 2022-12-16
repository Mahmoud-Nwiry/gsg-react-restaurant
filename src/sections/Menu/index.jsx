import React from 'react'
import './menu.css'

import Image1 from '../../assets/desh1.png'
import Image2 from '../../assets/desh2.png'
import Image3 from '../../assets/desh3.png'
import Image4 from '../../assets/desh4.png'
import Image5 from '../../assets/desh5.png'
import Image6 from '../../assets/desh6.png'
import MenuCard from '../../components/MenuCard'
import ContainerLarge from '../../components/ContainerLarge'

const menu1 = [
    {
        id : 1,
        image : Image1,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 2,
        image : Image2,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 3,
        image : Image3,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 4,
        image : Image4,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 5,
        image : Image5,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 6,
        image : Image6,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    }
];

const menu2 = [
    {
        id : 7,
        image : Image4,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 8,
        image : Image1,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 9,
        image : Image6,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 10,
        image : Image2,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 11,
        image : Image3,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    },
    {
        id : 12,
        image : Image5,
        name : 'Lorem ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet',
        price : 'Rs 222'
    }
];

const Menu = () => {
  return (
    <section className='menu'>
        <ContainerLarge>
            <h2>Straight From Kitchen</h2>
            <p className="under_title">Our Menu</p>
            <div className="menu_list">
                <div className="column">
                    {
                        menu1.map(item => <MenuCard key={item.id} image={item.image} name={item.name} description={item.description} price={item.price} />)
                    }
                </div>
                <div className="column">
                    {
                        menu2.map(item => <MenuCard key={item.id} image={item.image} name={item.name} description={item.description} price={item.price} />)
                    }
                </div>
            </div>
        </ContainerLarge>
    </section>
  )
}

export default Menu