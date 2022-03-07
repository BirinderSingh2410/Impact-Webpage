import React from 'react'
import './MobileNavBar.css'
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import { DropDown } from '../DropDown/DropDown';

export const MobileNavBar = () => {
  const [click,setClick] = useState(false);

  function abc(){
    setClick(!click);
  }  
  return (
    <div className="mobilenavbar" >
      {click ? 
      <div>
        <AiOutlineClose className='bars'onClick={abc} />
        <div className='ontoscreen'> 
          <AiOutlineClose className='cross' onClick={abc}/>
          <DropDown/>
        </div>
      </div>:<FaBars className='bars'onClick={abc}/>}
    </div>
  )
}
