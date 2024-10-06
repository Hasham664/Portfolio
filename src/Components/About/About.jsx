import React from 'react'
import './About.css';
const About = () => {
  return (
    <div className='container' id='about'>
      <div className='about-main'>
        <div className='about-logo'>
          <h1>About me</h1>
          <img src='/pink-img.svg' alt='' />
        </div>
        <div className='about-flex'>
          <div className='flex-img-about'>
            <img src='/sham-2.jpg' alt='' />
          </div>
          <div className='about-flex-text'>
            <div className='about-para'>
              <p>
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field. Throughout my career, I
                have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </p>
              <p>
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I
                bring to each project.
              </p>
            </div>
            <div className='about-inner-flex'>
              <p>HTML & CSS</p>
              <hr className='html' />
            </div>
            <div className='about-inner-flex'>
              <p>Bootstrap</p>
              <hr className='bootstrap' />
            </div>
            <div className='about-inner-flex'>
              <p>Tailwind</p>
              <hr className='tailwind' />
            </div>
            <div className='about-inner-flex'>
              <p>React Js</p>
              <hr className='react' />
            </div>
            <div className='about-inner-flex'>
              <p>JavaScript</p>
              <hr className='java' />
            </div>
          </div>
        </div>
        <div className='about-exper'>
          <div className='about-year'>
            <h1>01+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className='about-year'>
            <h1>25+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <div className='about-year1'>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About