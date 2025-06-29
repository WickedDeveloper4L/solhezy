import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.credits}>
        <p>©Copyright 2024 Edwako Digital marketing Agency</p>
      </div>
      <h1 className={styles.title}>Edwako</h1>
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
        <Link to="about" className={styles.link}>
          About
        </Link>
        <Link to="contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Footer;
