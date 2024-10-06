import './Hero.css'


const Hero = () => {
  
 
  return (
    <div className='container' id='home'>
      <div className='hero-sec'>
        <img src='/sham.jpg' alt='' />
        <h1>
          <span>I'm Muhammad Hasham, </span>
          Frontend developer from FSD
        </h1>
        <p>
          I am a frontend developer from Faisalabad, PK with 1 year of
          experience in freelancer.
        </p>
        <div className='hero-btns'>
          <button className='connect'>Connect with me</button>
          <button className='resume'>My resume</button>
        </div>
      </div>
    </div>
  );
}

export default Hero