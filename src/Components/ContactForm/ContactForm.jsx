import React from 'react'
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='container' id='contact'>
      <div className='logo-form'>
        <div className='about-logo'>
          <h1>Get in touch</h1>
          <img src='/pink-img.svg' alt='' />
        </div>
      </div>
      <div className='form'>
        <div className='form-text'>
          <h1>Let's talk</h1>
          <p className='form-para'>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className='form-text-flex'>
            <div className='flex-form'>
              <img src='/msg.svg' alt='' />
              <p>m.hasham3222@gmail.com</p>
            </div>
            <div className='flex-form'>
              <img src='/call.svg' alt='' />
              <p>+92-318-766-0815</p>
            </div>
            <div className='flex-form'>
              <img src='/location.svg' alt='' />
              <p>FSD, G.M abad</p>
            </div>
          </div>
        </div>
        <div className='form-inps'>
          <div className='form-inputs'>
            <p>Your Name</p>
            <input type='text' placeholder='Enter Your Name' />
          </div>
          <div className='form-inputs'>
            <p>Your Email</p>
            <input type='text' placeholder='Enter Your Email' />
          </div>{' '}
          <div className='form-inputs'>
            <p>Write your message here</p>
            <textarea
              name=''
              id=''
              cols='30'
              rows='7'
              placeholder='Enter Your Message'
            ></textarea>
          </div>
          <div className='form-btn'>
            <button>Submit now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm