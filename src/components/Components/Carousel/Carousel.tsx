import React, { useState,useEffect } from 'react'
import './Carousel.css'
import Person1 from './pics/person_1.jpg'
import Person2 from './pics/person_2.jpg'
import Person3 from './pics/person_3.jpg'
import {FaGreaterThan} from "react-icons/fa";
import {FaLessThan} from "react-icons/fa";
import { Card } from '../Card/Card';

export const Carousel = () => {
    const[autoscroll,setAutoscroll] = useState(true)
    const[next,setNext] = useState(0);
    const[pre,setPre] = useState(0);
    const[idname,setidname] = useState('');
    const[btn1,setbtn1] = useState('changeback');
    const[btn2,setbtn2] = useState('');
    const[btn3,setbtn3] = useState('');
    let interval:any;


    function card1(){
        setidname('firstcard');
            setbtn3('');
            setbtn2('');
            setbtn1('changeback');
    }
    function card2(){
        setidname('secondcard');
            setbtn3('');
            setbtn2('changeback');
            setbtn1('');
    }
    function card3(){
        setidname('thirdcard');
            setbtn3('changeback');
            setbtn2('');
            setbtn1('');
    }

    function nextSlide(){
        setNext((next)=>{
            const newNext =  next === -66 ? 0  : next - 33;
            if(next === -66){
                card3();
            }
            else if(next === -33){
                card2();
            }
            else{
                card1();
            }
            return newNext;
        })
        
    }

    function preSlide(){
        setPre((pre) => {
            const newPre =  pre === 0 ? -66 : pre + 33;
            if(newPre === -66){
                card3();
             }
             else if(newPre === -33){
                 card2();
             }
             else{
                 card1();
             }
             return newPre;
        });
       
    }

    function btnclick1(){
        card1();
    }

    function btnclick2(){
            card2();
        }

    function btnclick3(){
        card3();
    }

    
    return (
        <div className='sliderbox'  >
            <div className='sliderbox_slider'>
                <div className='left tab'>
                    <FaLessThan className='icon' onClick={preSlide} /> 
                </div>
                <div className='slider' id={idname} >
                        <Card image={Person1} heading="Maria Jones" caption="Customer" content="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"/>
                        <Card image={Person2} heading="Maria Jones" caption="Customer" content="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"/>
                        <Card image={Person3} heading="Maria Jones" caption="Customer" content="“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"/>
                </div>
                
                <div className='right tab'> 
                    <FaGreaterThan className='icon' onClick={nextSlide}/>
                </div>
            </div> 
            <div className='indication'>
                <button onClick={btnclick1} id={btn1}></button>
                <button onClick={btnclick2} id={btn2}></button>
                <button onClick={btnclick3} id={btn3}></button>
            </div>
        </div>
  )
}
