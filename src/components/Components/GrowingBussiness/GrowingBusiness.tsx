import React from 'react';
import './GrowingBusiness.css'
import Pic from './pics/illustration-1.jpg';
import { Description } from '../Description/Description';

export const GrowingBusiness = () => {
  return ( 
    <div className='growingbox'>
            <Description heading="Why Growing Your Business is Important" content="Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?" button_content="Learn More" />
        <div className='growingbox_image'>
            <img src={Pic} alt="Image"/>
        </div>  
    </div>
  )
}
