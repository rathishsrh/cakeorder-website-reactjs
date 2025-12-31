import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsGeoAltFill,
  BsTelephoneFill,
  BsEnvelopeFill
} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section brand">
          <h2>The Fresh Bakes</h2>
          <p>Freshly baked cakes made with love in Mulanur 🎂</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><BsGeoAltFill /> Mulanur, Tamil Nadu</p>
          <p><BsTelephoneFill /> +91 9XXXXXXXXX</p>
          <p><BsEnvelopeFill /> thefreshbakes@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Custom Cakes</li>
            <li>Orders</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <BsInstagram />
            <BsFacebook />
            <BsWhatsapp />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} The Fresh Bakes – Mulanur. All rights reserved.
      </div>
    </footer>
  );
};
