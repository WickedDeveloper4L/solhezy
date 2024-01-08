import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <GiHamburgerMenu
          className={styles.hamburger}
          onClick={() => setMenu(true)}
        />
        <div className={styles.first}>
          <div className={styles.name_div}>
            <h1 className={styles.name}>Solhezy</h1>
          </div>
        </div>
        <div className={styles.links}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="email_marketing" className={styles.link}>
            Email Marketing
          </NavLink>
          <NavLink to="dat_science" className={styles.link}>
            Data Science
          </NavLink>
          <NavLink to="video_marketing" className={styles.link}>
            Video Marketing
          </NavLink>
          <NavLink to="about" className={styles.link}>
            About
          </NavLink>
          <NavLink to="contact" className={styles.link}>
            Contact
          </NavLink>
        </div>
        <FaSearch className={styles.search} />
      </div>
      {menu && (
        <div className={styles.mobile_menu}>
          <div className={styles.name_div}>
            <h1 className={styles.name}>Avocent</h1>
            <span className={styles.motto}>Architects of continuity...</span>
          </div>
          <div className={styles.links}>
            <NavLink
              to="/"
              className={styles.link}
              onClick={() => setMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="onboarding"
              className={styles.link}
              onClick={() => setMenu(false)}
            >
              Onboarding
            </NavLink>
            <NavLink
              to="loans"
              className={styles.link}
              onClick={() => setMenu(false)}
            >
              Loans
            </NavLink>
            <NavLink
              to="products"
              className={styles.link}
              onClick={() => setMenu(false)}
            >
              Products & Services
            </NavLink>
            <NavLink
              to="about"
              className={styles.link}
              onClick={() => setMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              className={styles.link}
              onClick={() => setMenu(false)}
            >
              Contact
            </NavLink>
          </div>
          <button className={styles.btn}>LOGIN</button>
          <ImCross className={styles.cross} onClick={() => setMenu(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
