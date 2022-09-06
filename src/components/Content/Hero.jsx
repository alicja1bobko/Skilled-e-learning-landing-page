import React from "react";
import mobile from "../../assets/image-hero-mobile.png";
import tablet from "../../assets/image-hero-tablet.png";
import desktop from "../../assets/image-hero-desktop.png";

function Hero() {
  return (
    <div className="container hero">
      <div className="hero-text">
        <h1 className="hero-title">
          Maximize skill,
          <br />
          minimize budget
        </h1>
        <section className="font-lighter hero-section">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </section>
        <button className="hero-btn">Get started</button>
      </div>
      <div className="hero-image">
        <picture>
          <source media="(min-width:970px)" srcset={desktop} />
          <source media="(min-width:768px)" srcset={tablet} />
          <img src={mobile} alt="hero woman drinking coffee" />
        </picture>
      </div>
    </div>
  );
}

export default Hero;
