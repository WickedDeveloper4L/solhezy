import styles from "./privacy.module.scss";

const Privacy = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>
        Last Updated: <strong>May 2025</strong>
      </p>
      <p>Welcome to edwako.live</p>
      <p>
        We respect your privacy and are committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website.
      </p>
      <p>
        By using our Website, you agree to the collection and use of information
        in accordance with this policy.
      </p>

      <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className={styles.list}>
        <li>
          <strong>Personal Data</strong>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Contact information</li>
            <li>Any other information you voluntarily provide</li>
          </ul>
        </li>
        <li>
          <strong>Non-Personal Data</strong>
          <ul>
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Pages visited on our site</li>
            <li>Time and date of visit</li>
            <li>Referring website</li>
          </ul>
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
      <p>We may use the collected data for the following purposes:</p>
      <ul className={styles.list}>
        <li>To provide and maintain our Website</li>
        <li>To notify you about changes to our services</li>
        <li>To allow you to participate in interactive features</li>
        <li>To improve user experience</li>
        <li>To monitor website usage and analytics</li>
        <li>To send promotional emails (if you opt-in)</li>
      </ul>

      <h2 className={styles.sectionTitle}>
        3. Cookies and Tracking Technologies
      </h2>
      <p>
        We use cookies and similar tracking technologies to enhance your
        experience. You can disable cookies in your browser settings, but some
        features of the Website may not function properly.
      </p>

      <h2 className={styles.sectionTitle}>4. Third-Party Sharing</h2>
      <p>We may share your information with:</p>
      <ul className={styles.list}>
        <li>Service providers (e.g., hosting, analytics)</li>
        <li>Law enforcement or government authorities if required by law</li>
        <li>Business partners (with your consent)</li>
      </ul>
      <p>We do not sell your personal data to third parties.</p>

      <h2 className={styles.sectionTitle}>5. Data Security</h2>
      <p>
        We implement security measures to protect your data. However, no method
        of transmission over the internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2 className={styles.sectionTitle}>6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul className={styles.list}>
        <li>Access, correct, or delete your personal data</li>
        <li>Opt-out of marketing communications</li>
        <li>Restrict or object to data processing</li>
        <li>Request data portability</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:ewards@edwako.live" className={styles.link}>
          ewards@edwako.live
        </a>
      </p>

      <h2 className={styles.sectionTitle}>7. Children’s Privacy</h2>
      <p>
        Our Website is not intended for children under 13 (or the applicable age
        in your jurisdiction). We do not knowingly collect data from minors.
      </p>

      <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this policy periodically. Any changes will be posted on
        this page with an updated Last Revised date.
      </p>

      <h2 className={styles.sectionTitle}>9. Contact Us</h2>
      <p>
        For questions about this Privacy Policy, please contact us at:
        <br />
        Email:{" "}
        <a href="mailto:edwards@edwako.live" className={styles.link}>
          edwards@edwako.live
        </a>
      </p>

      <p className={styles.thankyou}>Thank you for visiting edwako.live</p>
    </div>
  );
};

export default Privacy;
