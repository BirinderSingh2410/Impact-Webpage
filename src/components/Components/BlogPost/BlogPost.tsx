import './BlogPost.css';
import React from 'react'
import Pic1 from './pics/post_2.jpg';
import Pic2 from './pics/post_3.jpg';
import Pic3 from './pics/post_4.jpg';
import { Importance } from '../Importance/Importance';


export const BlogPost = () => {
  return (
    <div className='blogpost'>
        <div className='blogpost_heading'>
            <h2>Blog Posts</h2>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
        </div> 
        <div className='blogpost_card'>
            <Importance image={Pic1} content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur." caption="May 27, 2021 • 12 Comments" heading="Important of getting a notifications"/>
            
            <Importance image={Pic2} content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur." caption="May 27, 2021 • 12 Comments" heading="Important of getting a notifications"/>
 
            <Importance image={Pic3} content="Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur." caption="May 27, 2021 • 12 Comments" heading="Important of getting a notifications"/>
         </div>
    </div>
  )
}
