import React from "react";
import "../../Styles/Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-col logo-col">
        <div className="footer-logo-group">
          <img src={logo} alt="Nongki Logo" className="footer-logo" />
        </div>
        <div className="footer-social">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-title">Our Desk</div>
        <div>Individual Desk</div>
        <div>Group Desk</div>
        <div>Meeting Room</div>
      </div>

      <div className="footer-col">
        <div className="footer-title">Help</div>
        <div>Customer Support</div>
        <div>Delivery Details</div>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>

      <div className="footer-col">
        <div className="footer-title">Contact</div>
        <div className="footer-contact-item">
          <FaMapMarkerAlt className="footer-contact-icon" />
          <span>Jl. Taman Pecatu I, Gn. Anyar, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294</span>
        </div>
        <div className="footer-contact-item">
          <FaEnvelope className="footer-contact-icon" />
          <span>info@nongki.com</span>
        </div>
        <div className="footer-contact-item">
          <FaPhone className="footer-contact-icon" />
          <span>+62 21 1234 5678</span>
        </div>
      </div>
    </div>

    <div className="copyright-banner">
      <p className="copyright-text">Copyright &copy; 2025 Nongki. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
