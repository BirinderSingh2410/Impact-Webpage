import React from 'react'
import { useState } from 'react';
import Pic from './pics/hero-min.jpg';
import './GetStarted.css'
import { RiPlayCircleFill } from "react-icons/ri";
import { IoCloseOutline } from 'react-icons/io5';

export const GetStarted = () => {

  const [play, setPlay] = useState(false);
  function playvideo() {
    setPlay(!play);
    document.body.className = 'overflow-hidden';
  }
  function closevideo() {
    setPlay(!play);
    document.body.className = '';
  }
  return (
    <div className='getstarted'>
      <div className='getstarted_content'>
        <h2>Get Started with Impact</h2>
        <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
        <ul className='getstarted_contentlist'>
          <li>Deserunt harum incidunt </li>
          <li>Ex nesciunt est temporibus ipsum</li>
          <li>Vel rem eveniet facere et velit sunt</li>
          <li>Aspernatur eaque quis</li>
          <li>Dolorem magnam quisquam? Facere</li>
        </ul>
        <button>Learn More</button>
      </div>
      <div className='getstarted_video'>
        <img src={Pic} alt="Image" onClick={playvideo} />
        <RiPlayCircleFill className='play' />
      </div>
      {
        play ?
          <div className='iframe'>
            <div className='backopac'></div>
            <IoCloseOutline className='iframeclose' onClick={(closevideo)} />
            <iframe className='iframevideo' src="https://www.youtube.com/embed/KI2lsdXJQ40"></iframe>
          </div> : <div></div>
      }
    </div>
  )
}
