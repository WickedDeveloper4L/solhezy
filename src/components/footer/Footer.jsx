import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import LOGO from "../../assets/logo.png"; // Assuming you have a logo image
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.credits}>
        <p>©Copyright 2024 Edwako Digital marketing Agency</p>
      </div>
      <img src={LOGO} alt="logo" className={styles.logo} />
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="email_marketing" className={styles.link}>
          Email Marketing
        </Link>
        <Link to="data_science" className={styles.link}>
          Data Science
        </Link>
        <Link to="video_marketing" className={styles.link}>
          Video Marketing
        </Link>
        <Link to="terms" className={styles.link}>
          Terms & Conditions
        </Link>
        <Link to="privacy" className={styles.link}>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
