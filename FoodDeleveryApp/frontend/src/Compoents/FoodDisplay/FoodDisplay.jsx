import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContexts } from '../../Context/StoreContexts'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContexts)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes Near You</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{

                if (category==="All" ||  category===item.category ) {
                    return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    
                }
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
