import React, { useState } from 'react';
import './Navbar.css';
import { IoMenu, IoClose } from 'react-icons/io5';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='container' id='home'>
      <nav className='navbar'>
        <div className='logo'>
          <h1>HASHAM</h1>
        </div>
        <ul className={isMobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About me</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#portfolio'>PortFolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <div className='btns'>
          <button className='demo'>Connect With Me</button>
        </div>
        <div className='hamburger' onClick={handleMenuToggle}>
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
