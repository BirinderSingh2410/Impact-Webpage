import React from 'react'
import './Card.css'
interface CardProp{
    image:string,
    heading:string,
    caption:string,
    content:string 
}
export const Card : React.FC<CardProp> =({image,caption,content,heading}) :JSX.Element=> {
  return (
    <div className='slidercard'>
        <img className="person" src={image} alt="Image" />
        <h3>{heading}</h3>
        <span>{caption}</span>
        <p>{content}</p>
    </div>
  )
}
