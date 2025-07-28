import React from "react";
import "../../Styles/Testi.css";
import SplitText from "../SplitText";
import AnimatedContent from "../AnimatedContent";

const testimonials = [
  {
    text: `"Cari inspirasi sambil kerja paling pas di sini. Suasananya mendukung banget buat fokus nulis. Fasilitas seperti air minum gratis dan kopi bikin nggak perlu bolak-balik keluar. Ada private booth juga kalau tiba-tiba butuh call sama klien. Solusi kerja anti-buntu!`,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah",
    role: "Content Writer"
  },
  {
    text: `"Sebagai freelancer, produktivitas itu kunci. Di sini saya menemukan semua yang dibutuhkan: internet super kenceng buat kirim file desain ukuran besar, banyak colokan, dan kursi yang nyaman buat kerja berjam-jam. Lingkungannya tenang tapi tetap ada energi kreatif. Highly recommended!`,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Hans",
    role: "UI/UX Designer"
  },
  {
    text: `"Wi-Fi di sini kenceng banget, colokannya juga ada di setiap meja. Kombinasi sempurna buat kelarin deadline. Kopinya bikin tetap melek, suasananya juga kondusif buat fokus. Bakal jadi markas utama buat ngerjain tugas"`,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Maya",
    role: "Mahasiswa"
  }
];

const Testimoni = () => (
  <section className="testimoni-section">
    <div className="testimoni-container">
      <SplitText
        text="TESTIMONI"
        type="chars"
        className="testimoni-title"
        from={{ y: 40, opacity: 0 }}
        to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 0.5 }}
        scrollTriggerOptions={{ start: 'top 105%' }}
      />
      <div className="testimoni-list">
        {testimonials.map((item, idx) => (
          <AnimatedContent
            key={idx}
            animation={{
              from: { y: 40, opacity: 0 },
              to: { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1)', delay: idx * 0.15 }
            }}
            scrollTriggerOptions={{ start: 'top 110%' }}
            className="testimoni-card-animated"
          >
            <div className="testimoni-card">
              <div className="testimoni-text">{item.text}</div>
              <div className="testimoni-profile">
                <img className="testimoni-img" src={item.img} alt={item.name} />
                <div className="testimoni-name">{item.name}</div>
                <div className="testimoni-role">{item.role}</div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </section>
);

export default Testimoni;