import React from 'react';
import './Professional.css';
import Pic3 from './pics/quotation.svg';
import Pic1 from './pics/24-hours-support.svg';
import Pic2 from './pics/good-review.svg';
import { Logo } from '../Logo/Logo';

export const Professional = () => {
  return (
    <div className='professional'>

      <Logo logo={<img src={Pic1} />} heading="Professional" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />


      <Logo logo={<img src={Pic2} />} heading="Good Review" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />

      <Logo logo={<img src={Pic3} />} heading="24/7 Support" content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur." />
    </div>
  ) 
}
