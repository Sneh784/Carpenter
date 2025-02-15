import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.Section}>
        <div className={styles.Container}>
          {/* Logo */}
          {/* <div className={styles.logo}>Sneha</div> */}
          <Link to="/aboutus" className={styles.logo}>Sneha</Link>
          {/* Mobile Menu Toggle */}
          <div className={styles.MenuIcon} onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <div className={`${styles.Nav} ${isMobile ? styles.NavActive : ""}`}>
            <Link to="/aboutus" onClick={() => setIsMobile(false)}>About Us</Link>
            <Link to="/services" onClick={() => setIsMobile(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>
            <div className={styles.Button} onClick={() => setIsMobile(false)}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
