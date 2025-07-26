import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Hero.css";
import HeroSlider from "../HeroSlider";
import SplitText from "../SplitText";
import AnimatedContent from "../AnimatedContent";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            <SplitText
              text="Tempat Kerja Inspiratif?"
              type="chars"
              className="hero-title"
              from={{ y: 40, opacity: 0 }}
              to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04 }}
            />
            <SplitText
              text="Nongki solusinya"
              type="chars"
              className="highlight"
              from={{ y: 40, opacity: 0 }}
              to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 1.6 }}
            />
          </h1>
          <p>
            <SplitText
              text="Solusi coworking dan meeting room terdepan. Temukan ruang terbaik untuk fokus dan kolaborasi."
              type="chars"
              className="highlight"
              from={{ y: 40, opacity: 0 }}
              to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0, delay: 2.6 }}
            />
          </p>
          <AnimatedContent animation={{
            from: { y: 30, opacity: 0 },
            to: { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 3.5 },
          }}
            className="btn-wrap">
            <Link to="/login" className="cta-btn">Pesan Sekarang</Link>
          </AnimatedContent>
        </div>
        <div className="hero-right">
          <AnimatedContent
            animation={{
              from: { y: 40, opacity: 0 },
              to: { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'back.out(1.7)'}
            }}
          >
            <div className="hero-image-wrapper">
              <HeroSlider />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Hero;
