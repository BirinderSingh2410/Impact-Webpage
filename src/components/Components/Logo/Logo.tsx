import React from 'react'


interface LogoProp{
    logo:JSX.Element,
    heading:string,
    content:string
}
export const Logo:React.FC<LogoProp> = ({heading, content,logo}): JSX.Element => {
  return( 
    <div className='logobox'>
        <div className='logo'>{logo}</div>  
        <div className='logobox_content'> 
            <h1>{heading}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}
