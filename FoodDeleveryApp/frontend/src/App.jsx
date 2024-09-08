import React from 'react'
import NavBar from './Compoents/NavbarFolder/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/Placeorder'
import Footer from './Compoents/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='app'>
  <NavBar></NavBar>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/Cart' element = {<Cart/>}/>
    <Route path='/order' element = {<PlaceOrder/>}/>
  </Routes>
    </div>
    <Footer/>

    </>
  )
}

export default App
