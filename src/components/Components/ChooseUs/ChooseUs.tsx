import React from 'react'
import { Logo } from '../Logo/Logo'
import './ChooseUs.css'
import Pic3 from './pics/about-us-min.png';
import Pic1 from './pics/24-hours-support.svg';
import Pic2 from './pics/good-review.svg';

export const ChooseUs = () => {
  return (
    <div className='chooseus'>
        <div className='chooseus_why'>
            <h2>Why You Should Choose Us</h2>
            
                <Logo logo={<img src={Pic1}/> } content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." heading="Professional"/>
                
            
                <Logo logo={<img src={Pic2}/> } content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur" heading="Good Review"/>
            
        </div>
        <div className='chooseus_image'>
           <img src={Pic3} alt="Image" className='pic'/> 
        </div>
    </div>

  )
}
