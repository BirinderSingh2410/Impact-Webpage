import './AboutImpact.css'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { GrPinterest } from 'react-icons/gr';
import { GrDribbble } from 'react-icons/gr';
import { Footer } from '../Footer/Footer';
 
export const AboutImpact = () => {
  return (
    <div className='aboutimpactbox'>
      <div className='aboutimpactbox_container'>
        <div className='aboutimpact_heading'>
          <h3>About Impact</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className='socialmedia'>
            <a href="#"><AiOutlineInstagram /></a>
            <a href="#"><AiOutlineTwitter /></a>
            <a href="#"><GrFacebookOption /></a>
            <a href="#"><GrLinkedinOption /></a>
            <a href="#"><GrPinterest /></a>
            <a href="#"><GrDribbble /></a>
          </div>
        </div>
        <div className='aboutimpact_links'>
          <Footer heading="Links" content={["About Us", "Services", "News", "Careers", "Contact"]} />
          <Footer heading="Company" content={["About Us", "Services", "News", "Careers", "Contact"]} />
          <Footer heading="Contact" content={["43 Raymouth Rd. Baltemoer, London 3910", "+1(123)-456-7890", "+1(123)-456-7890", "info@mydomain.com"]} />
        </div>
      </div>
      <div className='aboutimpact_footer'>
        <p>Copyright © 2022. All Rights Reserved. — Designed with love by <a href="https://untree.co/">Untree.co</a></p>
      </div>
    </div>
  )
}
