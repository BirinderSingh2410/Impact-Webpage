import React from 'react';
import './NavBar.css'
import { DropDown } from '../DropDown/DropDown';
import { MobileNavBar } from '../MobileNavBar/MobileNavBar';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_heading'><h1>Impact</h1></div>
      <MobileNavBar/> 
      <DropDown/>
    </div>
  )
}

