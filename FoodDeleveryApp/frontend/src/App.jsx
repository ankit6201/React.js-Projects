import React, { useState } from 'react'
import NavBar from './Compoents/NavbarFolder/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/Placeorder'
import Footer from './Compoents/Footer/Footer'
import LoginPopup from './Compoents/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin ={setShowLogin}/>:<></>}
    <div className='app'>
  <NavBar setShowLogin = {setShowLogin}/>
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
