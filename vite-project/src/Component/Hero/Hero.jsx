import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Geek Food</h1>
        <h1>Let us find your <span>Forever Food.</span></h1>
        <p>Your favorite food, delivered fast</p>
        <div className="hero-buttons">
          <button className="search-now">Search Now</button>
          <button className="know-more">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
