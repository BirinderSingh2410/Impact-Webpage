import React from 'react'
import './Footer.css'

interface FooterProp{
    heading:string,
    content:string[]
}
export const Footer:React.FC<FooterProp> = ({heading,content}):JSX.Element => {
  return (
    <div className='footerbox'>
            <h3>{heading}</h3>
              {content.map((i)=>{
                  return (
                    <a href="#">{i}</a>
                  )
              })}
    </div>
  )
}
