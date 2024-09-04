import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'

const NavBar = () => {

    const [menu,setmenu] = useState("home" )
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li onClick={()=>setmenu("home")} className={menu==="home"? "active":""}>Home</li>
        <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact ua</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
             </div>
             <button>sign in</button>
      </div>
    </div>
  ) 
}

export default NavBar
