import React from 'react'
import './DropDown.css'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaGreaterThan } from "react-icons/fa";
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

export const DropDown = () => {
  const[clickdrop,setDrop] = useState(false);
  const[clickdropsubmenu,setSub] = useState(false);
  const[getclass,setclass] = useState('');
  const[getidi,setid] = useState('');
  const[contentmenu,setContentMenu]= useState("⌄");
  const[contentsubmenu,setContentSubMenu]= useState(">");

  function dropmenu(){
    setDrop(!clickdrop);
    if(clickdrop){
      setclass("exit");
      setContentMenu("^");
      setContentSubMenu("⌄")
    }
    else{
      setclass("");
      setContentMenu("⌄");
    }
  }

  function dropsubmenu(){
    setSub(!clickdropsubmenu);
    if(clickdropsubmenu){
      setid("exit");
      setContentSubMenu("^");
    }
    else{
      setid("");
      setContentSubMenu("⌄")
    }
  }
  return (
    <div className='dropdown'> 
        <ul className='dropdown_list'>
          <li className='dropdown_content1'>Home</li>
          <li className='dropdown_content2' >
            Dropdown
            <span className='dropdownicon' onClick={dropmenu}>{contentmenu}</span>
             <ul className='dropdown_menu'  id={getclass}>
              <li className='dropdown_menulist'>Menu One</li>
              <li className='dropdown_menu2'> 
                Menu Two <span className='submenuicon' onClick={dropsubmenu}>{contentsubmenu}</span>
                <ul className='dropdown_menu2_submenu' id={getidi}> 
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
