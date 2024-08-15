import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-xxl">
        <div className="footer-links">
          <div className="link-sec">
            <h3>Logo</h3>
            <p>
              We believe that it is all about the BIG DREAMS and the small
              details!
            </p>
          </div>
          <div className="link-sec">
            <h3>Useful Links</h3>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="link-sec">
            <h3>Get In Touch</h3>
            <ul>
              <li>(877)303-8368</li>
              <li>email@email.com</li>
            </ul>
          </div>
          <div className="link-sec">
            <h3>Location</h3>
            <ul>
              <li>Raleigh, NC</li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            © 2019 Elegant Impressions Event and Design Solutions, LLC. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
