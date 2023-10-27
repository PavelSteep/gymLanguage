import React from 'react';
import aboutImg from '../img/about.png';

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImg} alt="about" />
      </div>
      <div className="about-text">
        <h1>LeARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laudantium magni? Vel accusantium libero commodi, explicabo ab ullam distinctio nostrum, excepturi sed in quasi veniam!
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About;