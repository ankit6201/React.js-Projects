import React, { useState } from 'react'
import './Home.css' 
import Header from '../../Compoents/Header/Header'
import ExploreMenu from '../../Compoents/Exploremenu/ExploreMenu'
import FoodDisplay from '../../Compoents/FoodDisplay/FoodDisplay'

const Home = () => {
    const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory = {setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
