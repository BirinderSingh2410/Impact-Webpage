import React from 'react';
import './NavBar.css'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaGreaterThan } from "react-icons/fa";


export const NavBar = () => {
  return (
    <div className='block'>
      <div className='block_heading'><span>Impact</span></div>
      <div className='block_navbar'> 
        <ul className='block_navbar_list'>
          <li className='content1' style={{ color: "white" }}>Home</li>
          <li className='content2'>
            Dropdown
            <RiArrowDropDownLine className='dropdownicon' />
            <ul className='dropdwon_menu'>
              <li className='menui'>Menu One</li>
              <li className='dropdown_menu2'> 
                Menu Two <FaGreaterThan className='submenuicon' />
                <ul className='dropdown_menu2_submenu'>
                  <li >Sub Menu One</li>
                  <li>Sub Menu Two</li>
                  <li> Sub Menu Three</li>
                </ul>
              </li>
              <li>Menu Three</li>
            </ul>
          </li>
          <li className='content1'>Services</li>
          <li className='content1'>Blog</li>
          <li className='content1'>About</li>
          <li className='content1'>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

