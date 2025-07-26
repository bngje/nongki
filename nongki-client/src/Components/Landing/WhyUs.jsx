import React from "react";
import "../../Styles/WhyUs.css";
import { FaWifi, FaPrint, FaSyncAlt, FaSmoking, FaSmokingBan, FaMosque, FaSnowflake, FaClock } from "react-icons/fa";
import SplitText from "../SplitText";
import AnimatedContent from "../AnimatedContent";

const features = [
  {
    icon: <FaClock className="whyus-icon" />,
    title: "9 AM - 9 PM",
    desc: "Jam operasional yang mendukung produktifitas"
  },
  {
    icon: <FaWifi className="whyus-icon" />,
    title: "WIFI SUPER KENCANG",
    desc: "Tersedia Wifi Cepat untuk meningkatkan efisiensi kerja"
  },
  {
    icon: <FaPrint className="whyus-icon" />,
    title: "GRATIS PRINTING",
    desc: "Menyediakan Printing Gratis untuk keperluan dokumen anda"
  },
  {
    icon: <FaSyncAlt className="whyus-icon" />,
    title: "GRATIS ISI ULANG",
    desc: "Gratis isi ulang air minum jika diperlukan"
  },
  {
    icon: <FaSmoking className="whyus-icon" />,
    title: "Smoking Indoor",
    desc: "Tersedia ruangan khusus untuk anda yang suka ingin bekerja sambil merokok"
  },
  {
    icon: <FaSmokingBan className="whyus-icon" />,
    title: "No-Smoking Indoor",
    desc: "Ruangan utama bebas asap rokok, cocok untuk yang ingin bekerja tanpa gangguan asap"
  },
  {
    icon: <FaMosque className="whyus-icon" />,
    title: "Musholla",
    desc: "Dunia Sementara, Akhirat Selamanya, jangan lupa beribadah meskipun bekerja"
  },
  {
    icon: <FaSnowflake className="whyus-icon" />,
    title: "AC DINGIN",
    desc: "Dilengkapi AC disetiap sudut ruangan, agar bekerja jadi lebih nyaman"
  }
];

const WhyUs = () => (
  <section className="whyus-section">
    <div className="whyus-container">
      <div className="whyus-title">
        <SplitText
          text="Kenapa Harus"
          type="chars"
          className=""
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 0.5 }}
          scrollTriggerOptions={{ start: 'top 90%' }}
        />
        <SplitText
          text="Nongki?"
          type="chars"
          className="whyus-highlight"
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 1.3 }}
          scrollTriggerOptions={{ start: 'top 90%' }}
        />
      </div>
      <div className="whyus-cards">
        {features.map((item, idx) => (
          <AnimatedContent
            key={idx}
            animation={{
              from: { y: 40, opacity: 0 },
              to: { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1)', delay: idx * 0.15 }
            }}
            scrollTriggerOptions={{ start: 'top 95%' }}
            className="whyus-card-animated"
          >
            <div className="whyus-card">
              {item.icon}
              <div className="whyus-card-title">{item.title}</div>
              <div className="whyus-card-desc">{item.desc}</div>
            </div>
          </AnimatedContent>
        ))}
      </div>
      <div className="whyus-footer">
        <SplitText
          text="NONGKI"
          type="chars"
          className="whyus-highlight"
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0, delay: 0.5 }}
          scrollTriggerOptions={{ start: 'top 95%' }}
        />
        <SplitText
          text="MENYEDIAKAN SETIAP KEBUTUHAN PRODUKTIFITAS ANDA"
          type="chars"
          className=""
          from={{ y: 40, opacity: 0 }}
          to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0, delay: 0.5 }}
          scrollTriggerOptions={{ start: 'top 95%' }}
        />
      </div>
    </div>
  </section>
);

export default WhyUs;