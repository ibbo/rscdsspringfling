import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./navigation.module.css";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              &#9776;
            </button>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
                <Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/dance-classes" className={styles.navLink}>Dance Classes</Link>
              <Link to="/evening-dances" className={styles.navLink}>Evening Dances</Link>
              <Link to="/accommodation" className={styles.navLink}>Accommodation</Link>
              <Link to="/pricing" className={styles.navLink}>Pricing</Link>
              <Link to="/how-to-get-there" className={styles.navLink}>How to Get There</Link>
              <Link to="/spring-fringe" className={styles.navLink}>Spring Fringe</Link>
              <Link to="/contact-faq" className={styles.navLink}>Contact/FAQ</Link>
            </nav>
        </>
        );
}

export default Navigation;

