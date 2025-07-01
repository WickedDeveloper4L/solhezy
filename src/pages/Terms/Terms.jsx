import styles from "./terms.module.scss";

const Terms = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Privacy Policy & Terms of Use</h1>
      <p className={styles.subtitle}>Welcome to edwako.live</p>
      <p>
        By accessing or using our Website, you agree to comply with and be bound
        by these Terms and Conditions. If you do not agree with any part of
        these terms, please do not use our Website.
      </p>

      <p className={styles.sectionTitle}>1. Acceptance of Terms</p>
      <p>
        By using edwako.live, you confirm that you have read, understood, and
        agreed to these Terms and Conditions, as well as our Privacy Policy.
      </p>

      <p className={styles.sectionTitle}>2. Changes to Terms</p>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be
        posted on this page with an updated "Last Revised" date. Continued use
        of the Website after changes constitutes acceptance of the new Terms.
      </p>

      <p className={styles.sectionTitle}>3. Use of the Website</p>
      <ul className={styles.list}>
        <li>
          You must be at least 13 years old (or the legal age in your
          jurisdiction) to use this Website.
        </li>
        <li>
          You agree not to use the Website for any illegal or unauthorized
          purposes.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of any login
          credentials.
        </li>
      </ul>

      <p className={styles.sectionTitle}>4. Intellectual Property</p>
      <ul className={styles.list}>
        <li>
          All content on edwako.live, including text, graphics, logos, and
          software, is the property of Edwako.live or its licensors and is
          protected by copyright and intellectual property laws.
        </li>
        <li>
          You may not reproduce, distribute, or modify any content without
          explicit permission.
        </li>
      </ul>

      <p className={styles.sectionTitle}>5. User-Generated Content</p>
      <ul className={styles.list}>
        <li>
          If you submit content (comments, reviews, etc.), you grant us a
          non-exclusive, royalty-free license to use, display, and modify it.
        </li>
        <li>You are solely responsible for the content you post.</li>
        <li>
          We reserve the right to remove any content that violates these Terms.
        </li>
      </ul>

      <p className={styles.sectionTitle}>6. Prohibited Activities</p>
      <ul className={styles.list}>
        <li>Use the Website for unlawful or fraudulent purposes.</li>
        <li>Attempt to hack, disrupt, or overload the Website.</li>
        <li>Post harmful, abusive, or defamatory content.</li>
        <li>Scrape or collect data without permission.</li>
      </ul>

      <p className={styles.sectionTitle}>7. Third-Party Links</p>
      <p>
        Our Website may contain links to third-party websites. We are not
        responsible for their content, privacy policies, or practices.
      </p>

      <p className={styles.sectionTitle}>
        8. Disclaimers & Limitation of Liability
      </p>
      <ul className={styles.list}>
        <li>The Website is provided "as is" without warranties of any kind.</li>
        <li>
          We do not guarantee uninterrupted, error-free, or secure access.
        </li>
        <li>
          edwako.live shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of the Website.
        </li>
      </ul>

      <p className={styles.sectionTitle}>9. Termination</p>
      <p>
        We may suspend or terminate your access to the Website at any time for
        violations of these Terms.
      </p>

      <p className={styles.sectionTitle}>10. Governing Law</p>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of Atlanta/GA 30309, without regard to its conflict of law
        principles.
      </p>

      <p className={styles.sectionTitle}>11. Contact Us</p>
      <p>
        For questions regarding these Terms, please contact us at:
        <br />
        Email:{" "}
        <a href="mailto:edwards@edwako.live" className={styles.link}>
          edwards@edwako.live
        </a>
      </p>

      <p className={styles.thankyou}>Thank you for using edwako.live</p>
    </div>
  );
};

export default Terms;
