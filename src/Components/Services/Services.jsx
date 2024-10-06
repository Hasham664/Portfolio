import React from 'react'
import './Services.css';
import { DataService } from '../../assets/ServiceData';
const Services = () => {
  return (
    <div className='container' id='services'>
      <div className='services-logo'>
        <div className='about-logo'>
          <h1>My Services</h1>
          <img src='/pink-img.svg' alt='' />
        </div>
      </div>
      <div className='sevices-grid'>
        {DataService.map((item, ind) => {
          return (
            <div className='main-service' key={ind}>
              <h2>{item.num}</h2>
              <h1> {item.header} </h1>
              <p> {item.para} </p>
              <div className='service-arrow'>
                <p> {item.read} </p>
                <img src={item.img} alt='' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services