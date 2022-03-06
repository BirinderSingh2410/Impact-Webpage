import React from 'react';
import './Importance.css'

interface ImportanceProp {
  image: string,
  caption:string,
  content: string,
  heading:string,
  
}
export const Importance: React.FC<ImportanceProp> = ({ image,caption, content,heading }): JSX.Element => {
  return (
    <div className='card'>
      <a href="https://untree.co/demos/impact/single.html">
        <img className='cardimage' src={image} />
      </a>
      <div className="card_content"> 
        <span>{caption}</span>
        <a href="https://untree.co/demos/impact/single.html">
          <h2>{heading}</h2>
        </a>
        <p>{content}</p>
        <a href="#"> 
          <p>Read more</p>
        </a>
      </div>
    </div>
  )
}
