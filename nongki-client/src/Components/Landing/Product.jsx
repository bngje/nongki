import React from "react";
import "../../Styles/Product.css";
import SplitText from "../SplitText";
import AnimatedContent from "../AnimatedContent";
import { FaTv, FaRegStickyNote, FaArrowRight } from "react-icons/fa";
import { TbTeapot, TbSnowflake, TbMicrophone2 } from "react-icons/tb";
import { FiPrinter, FiWifi, FiUser } from "react-icons/fi";
import { BsProjector } from "react-icons/bs"

const iconMap = {
  person: FiUser,
  wifi: FiWifi,
  tv: FaTv,
  whiteboard: FaRegStickyNote,
  mic: TbMicrophone2,
  ac: TbSnowflake,
  arrowright: FaArrowRight,
  teapot: TbTeapot,
  printer: FiPrinter,
  projector: BsProjector
};

const products = [
  {
    title: "Individual Desk",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Cocok buat kamu yang ingin kerja sendiri, belajar, atau fokus menyelesaikan proyek tanpa distraksi. Tenang, fasilitas tetap lengkap dan bikin nyaman.",
    capacity: "1 Orang",
    fasilitas: "Meja pribadi, kursi ergonomis, lampu baca, colokan listrik, wifi super cepat.",
    priceValue: "Rp 5,000",
    priceUnit: "/jam/desk",
    icons: ["wifi", "ac", "teapot", "printer"]
  },
  {
    title: "Group Desk",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop=600&q=80",
    description: "Mau bareng tim atau sekadar sharing space bareng teman? Group Desk hadir buat kolaborasi santai sampai brainstorming seru bareng rekan kerja.",
    capacity: "1 - 6 Orang",
    fasilitas: "Meja besar untuk 4-6 orang, whiteboard, colokan listrik, wifi super cepat.",
    priceValue: "Rp 5,000",
    priceUnit: "/jam/desk",
    icons: ["wifi", "ac", "teapot", "printer"]
  },
  {
    title: "Meeting Room",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
    description: "Untuk rapat penting, presentasi, atau diskusi besar, meeting room kami siap menunjang produktivitas dengan fasilitas lengkap dan suasana profesional.",
    capacity: "1 - 27 Orang",
    fasilitas: "Ruang meeting tertutup, proyektor, papan tulis, air mineral, wifi super cepat.",
    priceValue: "Rp 85,000 - 100,000",
    priceUnit: "/jam",
    icons: ["wifi", "ac", "teapot","printer", "tv", "mic", "projector"]
  }
];

const Product = () => (
  <section className="product-section" id="product">
    <div className="product-container">
      <SplitText
        text="Produk Kami"
        type="chars"
        className="product-title"
        from={{ y: 40, opacity: 0 }}
        to={{ y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.04, delay: 0.5 }}
        scrollTriggerOptions={{ start: 'top 110%' }}
      />
      <div className="product-cards-row">
        {products.map((item, idx) => (
          <AnimatedContent
            key={idx}
            animation={{
              from: { y: 40, opacity: 0 },
              to: { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1)', delay: idx * 0.15 }
            }}
            scrollTriggerOptions={{ start: 'top 95%' }}
            className="product-card-animated"
          >
            <div className="product-card">
              <img src={item.img} alt={item.title} />
              <div className="product-card-content">
                <div className="product-card-top">
                  <div className="product-card-title-wrapper">
                    <div className="product-card-title">{item.title}</div>
                    <div className="product-card-capacity-top">
                      <FiUser style={{ marginRight: 6, fontSize: 16, verticalAlign: 'middle' }} />
                      {item.capacity}
                    </div>
                  </div>
                  <div className="product-card-description">{item.description}</div>
                </div>
                <div className="product-card-bottom">
                  <div className="product-card-icons">
                    {item.icons.map((icon, iconIdx) => {
                      const IconComponent = iconMap[icon];
                      return IconComponent ? <IconComponent key={iconIdx} style={{ fontSize: 18 }} /> : null;
                    })}
                  </div>
                  <div className="product-card-footer">
                    <div className="product-card-price">
                      <span className="price-value">{item.priceValue}</span>
                      <span className="price-unit">{item.priceUnit}</span>
                    </div>
                    <button className="product-card-button">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </section>
);

export default Product;