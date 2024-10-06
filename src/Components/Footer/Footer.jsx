import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div className='container'>
      <div className='footer-one'>
        <div className='fot-myname'>
          <h1>HASHAM</h1>
          <p>
            I am a frontend developer from, FSD with 01 year of experience as a
            freelancer and i've made a lot of design too.
          </p>
        </div>
        <div className='fot-inp'>
          <div className='fot-input'>
            <img src='/person.svg' alt='' />
            <input type='text' placeholder='Enter Your Email' />
          </div>
          <div className='fot-btn'>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='fot-two'>
        <div className='copyright-fot'>
          <p>© 2023 Alex Bennett. All rights reserved.</p>
        </div>
        <div className='policy-fot'>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer