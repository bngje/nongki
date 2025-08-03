import React from "react";
import "../../Styles/Location.css";
import AnimatedContent from "../AnimatedContent";

const Location = () => {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=MQ6P+JFR, Jl. Taman Pecatu I, Gn. Anyar, Surabaya",
      "_blank"
    );
  };

  return (
    <section className="location-section" id="location">
      <div className="location-container">
        <AnimatedContent
          animation={{
            from: { y: 40, opacity: 0 },
            to: { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(2)' }
          }}
          scrollTriggerOptions={{ start: 'top 100%' }}
          className="location-animated"
        >
          <div className="location-row">
            <div className="location-text-column">
              <div className="location-title">Temukan Kami!</div>
              <div className="location-brand">NONGKI</div>
              <div className="location-address">
                Jl. Taman Pecatu I, Gn. Anyar, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294
              </div>
              <button className="location-btn" onClick={handleLocationClick}>
                Dapatkan Lokasi
              </button>
            </div>

            <div className="location-map-column">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.327655882824!2d112.8359390153944!3d-7.31684389471981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa19b67a11c3%3A0x8f2834a9c9a093a!2sJl.%20Taman%20Pecatu%20I%2C%20Gn.%20Anyar%2C%20Kec.%20Gn.%20Anyar%2C%20Surabaya%2C%20Jawa%20Timur%2060294!5e0!3m2!1sen!2sid!4v1663123456789!5m2!1sen!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Nongki"
              ></iframe>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Location;