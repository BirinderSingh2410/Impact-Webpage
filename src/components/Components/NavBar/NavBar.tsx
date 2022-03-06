import React from 'react';
import './NavBar.css'
import { DropDown } from '../DropDown/DropDown';
import { useState } from 'react';
import { FaTimes,FaBars } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_heading'><h1>Impact</h1></div>
      <DropDown/>
    </div>
  )
}

