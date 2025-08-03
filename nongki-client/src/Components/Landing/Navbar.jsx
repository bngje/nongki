import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";
import logo from "../../assets/logodark.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Nongki Logo" className="logo-image" />

            {/* Hamburger Menu Icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Navigation Menu */}
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="#">Beranda</a>
                <a href="#location">Lokasi</a>
                <a href="#product">Produk</a>
                <a href="#footer">Kontak</a>
                <Link to="/login" className="booking-btn mobile-only">Pesan</Link>
            </div>
            <Link to="/login" className="booking-btn desktop-only">Pesan</Link>
        </nav>
    );
};

export default Navbar;
