import React from 'react'
import './Features.css'
import { MdPhonelink } from 'react-icons/md';
import {BsLayersFill} from 'react-icons/bs';
import {MdLocalMall} from 'react-icons/md';
import { Logo } from '../Logo/Logo';
 
export const Features = () => {
  return ( 
    <div className='featurebox'>
        <Logo logo= {<BsLayersFill/>} heading="Design" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />            
        <Logo logo= {<MdPhonelink/>} heading="Applications" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
        <Logo logo= {<MdLocalMall/>} heading="eCommerce" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
    </div>
  )
}
