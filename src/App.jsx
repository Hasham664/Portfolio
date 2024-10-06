import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import LatestWork from './Components/LatestWork/LatestWork';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <LatestWork />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
