import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
    <>
    <div className='header'>
     <div className='logo'>
            <img src={logo}  alt='logo' />
       </div>
       <div className='email'>
           <a href='info@backstagetalks.com'>info@backstagetalks.com</a> 
       </div>
     </div>
    </>
  )
}

export default Header