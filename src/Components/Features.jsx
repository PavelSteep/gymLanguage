import React from "react";
import Feature from "./Feature";
import fimg1 from '../img/feature1.svg';
import fimg2 from '../img/feature2.svg';
import fimg3 from '../img/feature3.svg';
import fimg4 from '../img/feature4.svg';

function Features() {
  return (
    <div id="features">
      <h2>Features</h2>
      <div className="feature-blocks">
        <Feature img= { fimg1 } title="WeightLifting" />
        <Feature img= { fimg2 } title="Specific Muscle" />
        <Feature img= { fimg3 } title="Flex Your Muscle" />
        <Feature img= { fimg4 } title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Features;