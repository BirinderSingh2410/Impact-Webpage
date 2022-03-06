import React from 'react'


interface DescriptionProperty{
    heading:string,
    content:string,
    button_content:string
}  

export const Description:React.FC<DescriptionProperty> = ({heading, content,button_content}): JSX.Element =>{
  return (
    <div className='container'>
        <h1>{heading}</h1>
        <p>{content}</p>
        <button className='btn'>{button_content}</button>
    </div>
  )
}
