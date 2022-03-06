import React from 'react'

import Pic from './pics/hero-min.jpg';
import './GetStarted.css'
import { RiPlayCircleFill} from "react-icons/ri";

export const GetStarted = () => {
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
            <a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" ><img src={Pic} alt="Image"/></a>
            <RiPlayCircleFill className='play'/>
        </div>
    </div>
  )
}
