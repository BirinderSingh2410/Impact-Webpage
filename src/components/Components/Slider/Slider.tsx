import './Slider.css'
import React from 'react';
import Person1 from './pics/person_1.jpg'
import Person2 from './pics/person_2.jpg'
import Person3 from './pics/person_3.jpg'
import {FaGreaterThan} from "react-icons/fa";
import {FaLessThan} from "react-icons/fa";
import { Card } from '../Card/Card';


export const Slider = () => {
  return (
    <div className='sliderbox'>
        <div className='sliderbox_slider'>
            <div className='left tab'>
                <FaLessThan className='icon'/> 
            </div>
            <div className='slider'>
                    <Card image={Person1} heading="Maria Jones" caption="Customer" content="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"/>
                    <Card image={Person2} heading="Maria Jones" caption="Customer" content="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"/>
                    <Card image={Person3} heading="Maria Jones" caption="Customer" content="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"/>
            </div>
            
            <div className='right tab'> 
                <FaGreaterThan className='icon'/>
            </div>
        </div> 
        <div className='indication'>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}
