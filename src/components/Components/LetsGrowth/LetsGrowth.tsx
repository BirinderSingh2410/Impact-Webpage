import React from 'react'
import './LetsGrowth.css'
import Pic1 from './pics/persons-group-1.png';
import Pic2 from './pics/persons-group-2.png';
import { Description } from '../Description/Description';
 
export const LetsGrowth = () => {
  return (
    <div className='growth_block'>
        <img className='pic_1' src={Pic1} alt="Image"/>
        <Description heading="Let's growth your business with us" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." button_content="Get In Touch" />
        <img className='pic_2' src={Pic2} alt="image"/>
    </div>
  )
}
