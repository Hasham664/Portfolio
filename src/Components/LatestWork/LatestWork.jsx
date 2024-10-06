import React from 'react'
import './LatestWork.css';
const LatestWork = () => {
  return (
    <div className='container' id='portfolio'>
      <div className='lates-logo'>
        <div className='about-logo'>
          <h1>My latest work</h1>
          <img src='/pink-img.svg' alt='' />
        </div>
      </div>
      <div className='latest-flex'>
        <a href='https://food-website-gamma-seven.vercel.app/'>
          <img src='/food.png' alt='' />
        </a>
        <a href='https://e-commerce-front-end-phi.vercel.app/'>
          <img src='/e-commer-1.png' alt='' />
        </a>
        <a href='https://morocana.vercel.app/'>
          <img src='/morocona.png' alt='' />
        </a>
        <a href='https://silent-eye-one.vercel.app/'>
          <img src='/silent.png' alt='' />
        </a>
        <a href='https://claim-market.vercel.app/'>
          <img src='/claim.png' alt='' />
        </a>
        <a href='https://animation-three-red.vercel.app/'>
          <img src='/animation.png' alt='' />
        </a>
        <a href='https://star-beta.vercel.app/'>
          <img src='/star.png' alt='' />
        </a>
        <a href='https://bio-haferdrink.vercel.app/'>
          <img src='/bio.png' alt='' />
        </a>
        <a href='https://agency2-vtgv.vercel.app/'>
          <img src='/agency.png' alt='' />
        </a>
      </div>
      <div className='latest-btn'>
        <a href='https://github.com/'>Show More</a>
        <img src='/arrow.svg' alt='' />
      </div>
    </div>
  );
}

export default LatestWork