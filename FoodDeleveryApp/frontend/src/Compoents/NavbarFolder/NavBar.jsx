import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContexts } from '../../Context/StoreContexts'

const NavBar = ({setShowLogin}) => {

    const [menu,setmenu] = useState("menu")
    const {getTotalCartAmount} =useContext(StoreContexts)
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 

      <ul className="navbar-menu">
        <Link to= '/' onClick={()=>setmenu("home")} className={menu==="home"? "active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact ua</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
             </div>
             <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  ) 
}

export default NavBar
