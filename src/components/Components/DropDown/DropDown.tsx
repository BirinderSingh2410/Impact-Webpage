import React from 'react'
import './DropDown.css'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaGreaterThan } from "react-icons/fa";

export const DropDown = () => {
  return (
    <div className='dropdown'> 
        <ul className='dropdown_list'>
          <li className='dropdown_content1'>Home</li>
          <li className='dropdown_content2'>
            Dropdown
            <RiArrowDropDownLine className='dropdownicon' /> 
            <ul className='dropdown_menu'>
              <li className='dropdown_menulist'>Menu One</li>
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
          <li className='dropdown_content1'>Services</li>
          <li className='dropdown_content1'>Blog</li>
          <li className='dropdown_content1'>About</li>
          <li className='dropdown_content1'>Contact Us</li>
        </ul>
      </div>
  )
}
