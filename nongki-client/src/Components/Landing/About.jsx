import React from "react";
import "../../Styles/About.css";
import SplitText from "../SplitText";
import AnimatedContent from "../AnimatedContent";

const About = () => (
  <section className="about-section">
    <div className="about-container">
      <SplitText
        text="Tentang Nongki"
        type="chars"
        className="hero-title"
        from={{ y: 40, opacity: 0 }}
        to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0 }}
        scrollTriggerOptions={{ start: 'top 80%' }}
      />
      <div className="about-heading">
        <SplitText
          text="Menciptakan Ruang"
          type="chars"
          className=""
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 0.5 }}
          scrollTriggerOptions={{ start: 'top 80%' }}
        />
        <SplitText
          text="Inspirasi dan Kolaborasi"
          type="chars"
          className="about-highlight"
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 1.3 }}
          scrollTriggerOptions={{ start: 'top 80%' }}
        />
      </div>
      <SplitText
        text="Di Nongki, kami percaya bahwa lingkungan yang tepat mendorong ide-ide cemerlang dan produktivitas maksimal. Kami hadir sebagai ruang kerja yang inspiratif dan fungsional, dengan coworking desk fleksibel dan meeting room modern untuk mendukung setiap langkah profesional Anda. Lebih dari sekadar tempat kerja, Nongki adalah komunitas di mana inovasi tumbuh dan kolaborasi terjalin. Selamat datang di Nongki – tempat di mana potensi Anda menemukan ruangnya."
        type="words"
        className="about-desc"
        from={{ y: 40, opacity: 0 }}
        to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0, delay: 2 }}
        scrollTriggerOptions={{ start: 'top 80%' }}
      />
      <AnimatedContent
        animation={{
          from: { y: 40, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 1, delay: 1 }
        }}
        scrollTriggerOptions={{ start: 'top 80%' }}
      >
        <div className="about-images-scroll">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="img1" />
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="img2" />
          <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" alt="img3" />
        </div>
      </AnimatedContent>
    </div>
  </section>
);

export default About;